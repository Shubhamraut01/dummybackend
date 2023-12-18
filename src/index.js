import { dbConnection } from "./db/database.js";
import { app } from "./app.js";

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
