import { Request, Response } from "express";
import resHandler from "@helper/resHandler";
import UserModel from "@models/user";

export const login = async (req: Request, res: Response) => {
  try {
    return resHandler(req, res, 200, "Login");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    return resHandler(req, res, 200, "Register");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
