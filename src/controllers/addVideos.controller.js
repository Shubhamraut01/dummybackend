// import { Video } from "../src/models/video.model.js";

export const addVideos = async (req, res, next) => {
  const { title, description, url, published } = req.body;

  const videos = req.body;

  videos.forEach(async (video) => {
    try {
      const newVideo = await Video.create({
        title,
        description,
        url,
        published,
      });
      res.status(201).json(newVideo);
    } catch (error) {
      console.log("videos are nnot added due to some error :", error);
    }
  });

  next();
};
