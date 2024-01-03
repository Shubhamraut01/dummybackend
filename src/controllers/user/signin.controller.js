import { validationResult } from "express-validator";
import { User } from "../../models/user.model.js";
import jwt from 'jsonwebtoken';



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

 const data = await User.findOne({
    where: {
      username: username,
      password: password,
      
    },
  })
  const secretKey = 'yourSecretKey';
  const token = jwt.sign(req.body, secretKey, { expiresIn: '1h' });


  console.log("check::::",data)
  if(data != null){
    res.status(200).send(token)
  }else{
    res.send("incorrect username or password")
  }

};
