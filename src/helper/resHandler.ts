import { Request, Response } from "express";

const main = (
  req: Request,
  res: Response,
  status: number = 200,
  msg?: string,
  data?: any
) => {
  try {
    if (status > 299) {
      return res.status(status).json({ APIStatus: false, message: msg, data });
    } else {
      return res.status(status).json({ APIStatus: true, message: msg, data });
    }
  } catch (error) {
    throw error;
  }
};

export default main;
