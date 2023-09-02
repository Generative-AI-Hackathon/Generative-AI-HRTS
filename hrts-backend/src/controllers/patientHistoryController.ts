import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";

export const patientGetHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientFilterHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientAddHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientDeleteHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientUpdateHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

