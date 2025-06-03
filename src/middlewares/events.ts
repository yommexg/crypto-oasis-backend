import { format } from "date-fns";
import { NextFunction, Request, Response } from "express";

export const logEvent = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(
    `${req.method} \t Origin=${req.headers.origin} \t ${
      req.url
    } \t Body=${JSON.stringify(req?.body)}`
  );

  next();
};

export const errorEvent = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);
  res.status(500).send(err.message);
};
