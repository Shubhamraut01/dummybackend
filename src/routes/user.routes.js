import { getAllUser } from "../controllers/user/getAllUsers.controller.js";
// import { addVideo } from "../controllers/video/addVideo.controller.js";
// import { addVideos } from "../controllers/video/addVideos.controller.js";
// import { getAllVideo } from "../controllers/video/getAllVideo.controller.js";
import express from "express";
import { signin } from "../controllers/user/signin.controller.js";
// import { signup } from "../controllers/video/signup.controller.js";
import { signInValidationSchema } from "../helpers/validations.helper.js";
import { signup } from "../controllers/user/signup.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const router = express.Router();


router.get("/users",verifyToken ,getAllUser );
router.post("/signin",signInValidationSchema, signin);
router.post("/signup", signup);
// router.post("/signin", addVideo);

export default router;
