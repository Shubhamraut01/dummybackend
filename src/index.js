import { dbConnection } from "./db/database.js";
import { app } from "./app.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config({ path: path.join(__dirname, "../.env") });

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
