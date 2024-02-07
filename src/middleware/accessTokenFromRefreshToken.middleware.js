import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { promisify } from "util";

const verifyAsync = promisify(jwt.verify);

export const accessTokenFromRefreshToken = async (req, res, next) => {
  const refreshToken = req.headers['refreshtoken'];
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  try {
    const storedRefreshToken = await User.findOne({
      where: {
        refreshToken: refreshToken
      },
    });

    if (!storedRefreshToken) {
      return res.status(401).json({ message: "Incorrect refresh token" });
    }

    const decoded = await verifyAsync(refreshToken, refreshTokenSecret);

    const { userId, username } = decoded;

    const newAccessToken = jwt.sign({ userId, username }, accessTokenSecret, { expiresIn: '1h' });

    // Set secure and httpOnly flags for better security
    res.cookie('access_token', newAccessToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
    console.log(`New Access Token created with payload ${userId}`);

    req.accessToken = newAccessToken;
    res.status(200).json({ message: 'Access token refreshed successfully', accessToken: newAccessToken });
    next();
  } catch (err) {
    console.error("Error:", err);
    return res.status(403).json({ message: 'Failed to authenticate refresh token' });
  }
};
