import { addVideo } from "../controllers/video/addVideo.controller.js";
import { addVideos } from "../controllers/video/addVideos.controller.js";
import { getAllVideo } from "../controllers/video/getAllVideo.controller.js";
import express from "express";
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const router = express.Router();

router.get("/videos", verifyToken, getAllVideo);
router.post("/addvideos",verifyToken, addVideos);
router.post("/addvideo", verifyToken,addVideo);

export default router;
