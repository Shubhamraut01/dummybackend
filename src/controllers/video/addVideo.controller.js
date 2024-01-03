// import { Video } from "../src/models/video.model.js";

import { Video } from "../../models/video.model.js";

export const addVideo = async (req, res, next) => {
  const { title, description, url, published } = req.body;
  try {
    const newVideo = await Video.create({ title, description, url, published });
    res.status(201).json(newVideo);
  } catch (error) {
    console.log("videos are nnot added due to some error :", error);
  }
  next();
};
