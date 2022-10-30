import { Request, Response, NextFunction } from "express";

export const test2 = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Express");
};
