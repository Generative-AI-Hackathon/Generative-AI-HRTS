import HospitalAuthService from "../services/hospitalAuthService";
import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";

export const hospitalSignup = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const hospitalAuth = HospitalAuthService.signup(req.body);
    res.status(201).json({
      success: true,
      data: hospitalAuth,
    });
  }
);

export const hospitalSignin = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    const hospitalAuth = HospitalAuthService.signin(req.body);
    res.status(201).json({
      success: true,
      data: hospitalAuth,
    });
  }
);

export const hospitalChangePassword = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

// export const hospitalDeleteAccount = CatchAsyncErrors(
//   (req: Request, res: Response) => {}
// );
