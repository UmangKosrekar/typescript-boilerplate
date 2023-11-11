import { Router } from "express";
import { login } from "@controllers/authController";

const app = Router();

app.get("/login", login);

export default app;
