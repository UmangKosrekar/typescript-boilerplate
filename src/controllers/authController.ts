import { Request, Response } from "express";
import resHandler from "@resHandler";

export const login = (req: Request, res: Response) => {
  try {
    return resHandler(req, res, 200, "ok");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
