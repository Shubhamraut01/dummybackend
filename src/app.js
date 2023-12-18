import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "12kb" })); //extended: true => allows nested

//routes import
import videoRouter from "./routes/video.routes.js";
import { homeController } from "./controllers/home.controller.js";

const dummyMiddleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

app.get("/", dummyMiddleware, homeController);
app.use("/api/v1/videolibrary", videoRouter);

export { app };
