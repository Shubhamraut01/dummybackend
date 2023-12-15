import { Sequelize } from "sequelize";
import mysql from "mysql2";

const dbConnection = new Sequelize("hello_world_db", "root", "Shubham#123", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql,
});

export { dbConnection };
