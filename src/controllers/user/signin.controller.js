import { validationResult } from "express-validator";
import { User } from "../../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
import { ApiResponse } from "../../utils/ApiResponse.util.js";
import { ApiError } from "../../utils/ApiError.util.js";



export const signin = async (req, res) => {

    const {username ,password} = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }

    console.log(req.body);

try {
   const user = await User.findOne({
      where: {
        username: username 
        
      },
    })
  
  if (!user){
    // throw new ApiError(401,"incorrect username");
    return res.status(401).json({message:"incorrect username"})
  
  }
  
  
  const isPasswordValid = await bcrypt.compare(password, user.password)
  
  if (!isPasswordValid){
    // throw new ApiError(401,"incorrect password");
    return res.status(401).json({message:"incorrect password"})
  }
  
  
  
    const secretKey = process.env.ACCESS_TOKEN_SECRET;
    const token = jwt.sign({userId:user.id,username:user.username}, secretKey, { expiresIn: '1h' });
  
  
  // throw ApiResponse(200,token,"login success")
  return res.status(200).json({
    success: true,
    message: "login success",
    AccessToken: token,
  });
 
  
} catch (error) {
  // throw new ApiError(500,"Internal Server Error")
  console.error(error);
  return res.status(500).json({message:"something went wrong"})
}
};
