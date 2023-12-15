import { homeController } from "./controllers/home.controller.js";
import { dbConnection } from "./db/database.js";
import { app } from "./app.js";
import videoRouter from "./routes/video.routes.js";

const dummyMiddleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

app.get("/", dummyMiddleware, homeController);
app.use("/v1", videoRouter);

dbConnection
  .authenticate()
  .then(() => {
    console.log("Database Connection Estabalished shubham.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
