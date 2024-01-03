import { Video } from "../../models/video.model.js";

export const addVideos = async (req, res, next) => {
  const videos = req.body; // Assuming req.body contains an array of videos

  try {
    const createdVideos = await Promise.all(
      videos.map(async (video) => {
        const { title, description, url, published } = video;
        try {
          const newVideo = await Video.create({
            title,
            description,
            url,
            published,
          });
          return newVideo;
        } catch (error) {
          console.log("Error adding a video:", error);
          // If you want to handle errors per video, you can throw an error here
          // throw new Error(`Error adding video: ${error}`);
          // For this example, let's return null for failed videos
          return null;
        }
      })
    );

    // Filter out null values (failed videos) from the createdVideos array
    const successfulVideos = createdVideos.filter((video) => video !== null);

    if (successfulVideos.length > 0) {
      res.status(201).json(successfulVideos);
    } else {
      res.status(400).json({ message: "All videos failed to add" });
    }
  } catch (error) {
    console.log("Error adding videos:", error);
    res.status(500).json({ message: "Error adding videos" });
    // You can handle the error here or pass it to the error handling middleware
    // next(error);
  }
};
