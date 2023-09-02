import PatientAuthService from "../services/patientAuthService";
import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";

export const patientSignup = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const patientAuth = PatientAuthService.signup(req.body);
    res.status(201).json({
      success: true,
      data: patientAuth,
    });
  }
);

export const patientSignin = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const patientAuth = PatientAuthService.signin(req.body);
    res.status(201).json({
      success: true,
      data: patientAuth,
    });
  }
);

export const patientChangePassword = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

export const patientDeleteAccount = CatchAsyncErrors(
  (req: Request, res: Response) => {}
);
