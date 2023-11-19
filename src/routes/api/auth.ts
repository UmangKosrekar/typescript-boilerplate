import { Router } from "express";
import { login, register } from "@controllers/authController";

import joiValidator from "@helperjoiValidator";
import { registerValidation } from "@validations/auth";

const app = Router();

app.post("/login", login);
app.post("/register", joiValidator(registerValidation), register);

export default app;
