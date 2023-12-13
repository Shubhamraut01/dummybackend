import express from "express";
import { homeController } from "./controllers/home.controller.js";
import { dbConnection } from "./db/database.js";

dbConnection
  .authenticate()
  .then(() => {
    console.log("Database Connection Estabalished shubham.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();

const dummyMiddleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

app.get("/", dummyMiddleware, homeController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
