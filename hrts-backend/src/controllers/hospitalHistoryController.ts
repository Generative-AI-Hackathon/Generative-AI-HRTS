import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";

export const hospitalGetHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

export const hospitalFilterHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);
