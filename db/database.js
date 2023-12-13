import { Video } from "../models/video.model.js";
import { dbConnection } from "./connection.db.js";

Video.sync({ alter: false })
  .then(() => {
    console.log("Database Video table synchronized successfully!");
  })
  .catch((error) => {
    console.error("Unable to sync database Video table:", error);
    // Handle the error appropriately
  });

export { dbConnection };
