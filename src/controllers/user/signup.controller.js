// import { User } from "../../models/user.model.js";

import { User } from "../../models/user.model.js";



export const signup = async (req, res) => {
    const {username ,password ,email , phone ,role , avatar,cover,} = req.body;
    console.log("req.body::::",req.body);
    const check = User.findOne({
        where: {
        username: username,
        
        }})

        console.log("check::",check)

 const newuser = User.create({
  
      username: username,
      password: password,
        email: email,
        phone: phone,
        role: role,
        avatar: avatar,
        cover: cover,

    
  })
  res.send({"hello":"world"})
  console.log("newuser",newuser)
  
  console.log("check::::",check)
};
