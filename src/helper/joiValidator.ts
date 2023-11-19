import { Request, Response, NextFunction } from "express";
import resHandler from "@helperresHandler";

const validation = (Schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = Schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message.replace(/["]/g, "");
      return resHandler(req, res, 422, errorMessage);
    }
    next();
  };
};

export default validation;
