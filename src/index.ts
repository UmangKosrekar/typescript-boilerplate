import dotenv from "dotenv";
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dbConnection from "@db";

dotenv.config();

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(morgan("dev"));

// DB connection file
dbConnection();

// routes
import mainRoute from "./routes/index";
app.use("/api/", mainRoute);
app.get("*", (req: Request, res: Response) => {
  return res.send("Welcome to Server, U have hit the dead end");
});

app.listen(port, () => console.log(`server @ ${port}`));
