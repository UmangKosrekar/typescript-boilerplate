import { Router, Request, Response } from "express";

const app = Router();

app.get("/login", (req: Request, res: Response) => {
  return res.render("Demo", {
    title: "View Engine Demo"
  });
});

export default app;
