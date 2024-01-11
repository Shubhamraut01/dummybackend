// import { User } from "../../models/user.model.js";

import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.util.js";
import { ApiResponse } from "../../utils/ApiResponse.util.js";
import bcrypt from "bcrypt"



export const signup = async (req, res) => {
    const {username ,password ,email , phone ,role , avatar,cover,} = req.body;
    
    if (!username || !password || !email || !role){
      throw new ApiError(400,"Username , password ,email and role are required fields")
    }

   try {
     const existingUser = await User.findOne({
        //  [Op.or]: [
        //  {username: username},{email: email}
         
        //  ]
        where: {
          username: username ,
          email: email
          
        },
        })
 if(existingUser){
  throw new ApiError(400,"user already exists")
 }

         const hashedPassword = await bcrypt.hash(password,10)


  const newuser = await User.create({
   
       username: username,
       password: hashedPassword,
         email: email,
         phone: phone,
         role: role,
         avatar: avatar,
         cover: cover,
 
     
   })
  
// throw ApiResponse(201,newuser,"regestration successful")
res.status(201).send("regestration successful")

   } catch (error) {
      // throw new ApiError(500,"Internal Server Error")
      res.status(500).send("something went wrong")
    
   }
};
