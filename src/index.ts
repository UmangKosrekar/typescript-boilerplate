import dotenv from "dotenv";
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import dbConnection from "@db";

dotenv.config();

const port = process.env.PORT || 4001;

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// DB connection file
dbConnection();

// routes
import apiRoute from "./routes/api/index";
import viewRoute from "./routes/view/index";
app.use("/api/", apiRoute);
app.use("/view/", viewRoute);
app.get("*", (req: Request, res: Response) => {
  return res.send("Welcome to Server, U have hit the dead end");
});

app.listen(port, () => console.log(`server @ ${port}`));
