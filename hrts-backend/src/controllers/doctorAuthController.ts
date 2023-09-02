import doctorAuthService from "../services/doctorAuthService";
import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
import { Request, Response } from "express";

export const doctorSignup = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const doctorAuth = doctorAuthService.signup(req.body);
    res.status(201).json({
      success: true,
      data: doctorAuth,
    });
  }
);

export const doctorSignin = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const doctorAuth = doctorAuthService.signin(req.body);
    res.status(201).json({
      success: true,
      data: doctorAuth,
    });
  }
);

export const doctorChangePassword = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

export const doctorDeleteAccount = CatchAsyncErrors(
  (req: Request, res: Response) => {}
);
