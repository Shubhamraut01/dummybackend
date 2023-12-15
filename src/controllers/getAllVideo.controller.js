import { Video } from "../src/models/video.model.js";

export const getAllVideo = (req, res) => {
  Video.findAll()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
};
