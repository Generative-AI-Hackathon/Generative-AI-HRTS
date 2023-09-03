import HistoryService from "../services/historyService";
import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";

export const patientGetHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const data = await HistoryService.loadhistory(userId);
    res.status(200).json({ data });
    
  }
);


export const patientFilterHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientAddHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const { body } = req;
    const data = await HistoryService.add(body);
    res.status(200).json({ data });
  }
);


export const patientDeleteHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);


export const patientUpdateHistory = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

