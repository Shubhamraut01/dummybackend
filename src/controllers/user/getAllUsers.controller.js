import { User } from "../../models/user.model.js";



export const getAllUser = (req, res) => {
  User.findAll()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
};
