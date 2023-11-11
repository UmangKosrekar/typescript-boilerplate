import { Router } from "express";
import auth from "./auth";

const app = Router();
app.use("/auth", auth);

export default app;
