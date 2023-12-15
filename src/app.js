import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "12kb" })); //extended: true => allows nested

export { app };
