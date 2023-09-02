import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
// import AuthService from "../services/auth";
import { Request, Response } from "express";
import MedicationService from "../services/MedicationService";

export const patientAddMedication = CatchAsyncErrors(
  (req: Request, res: Response) => {
    const medictionId = MedicationService.add(req.body);
    return res.status(201).json({
      success: true,
      data: medictionId,
    });
  }
);


export const patientGetMedication = CatchAsyncErrors(
  async (req: Request, res: Response) => {
    await MedicationService.update(req.body);
    return res.status(204).json({
      success: true,
    });
  }
);

export const patientFilterMedication = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

export const patientUpdateMedication = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);

export const patientDeleteMedication = CatchAsyncErrors(
  async (req: Request, res: Response) => {}
);
