import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    const secretKey = process.env.ACCESS_TOKEN_SECRET;
  
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
      req.decoded = decoded;
      next();
    });
  };
  