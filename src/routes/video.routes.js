import { addVideo } from "../controllers/addVideo.controller.js";
import { addVideos } from "../controllers/addVideos.controller.js";
import { getAllVideo } from "../controllers/getAllVideo.controller.js";
import express from "express";

const router = express.Router();

router.get("/videos", getAllVideo);
router.post("/addvideos", addVideos);
router.post("/addvideo", addVideo);

export default router;
