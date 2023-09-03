import {
  patientAddMedication,
  patientDeleteMedication,
  patientFilterMedication,
  patientGetMedication,
  patientUpdateMedication,
} from "../controllers/patientMedicationController";
import {
  patientDeleteAccount,
  patientSignin,
  patientSignup,
} from "../controllers/patientAuthController";
import express from "express";
import {
  patientFilterHistory,
  patientGetHistory,
  patientAddHistory,
  patientUpdateHistory,
} from "../controllers/patientHistoryController";

const patientRouter = express.Router();

//Auth
patientRouter.post("/auth/signup", patientSignup);
patientRouter.post("/auth/signin", patientSignin);
patientRouter.delete("/auth/deleteaccount/:id", patientDeleteAccount);
patientRouter.put("/auth/changepassword/:id", patientDeleteAccount);

//History
patientRouter.post("/history/add", patientAddHistory);
patientRouter.get("/history/:userId", patientGetHistory);
patientRouter.get("/history/filter", patientFilterHistory);
patientRouter.put("/history/update", patientUpdateHistory);
patientRouter.delete("/history/delete", patientDeleteMedication);


//Medication
patientRouter.post("/medication/add", patientAddMedication);
patientRouter.get("/medication/get", patientGetMedication);
patientRouter.get("/medication/filter", patientFilterMedication);
patientRouter.put("/medication/update", patientUpdateMedication);
patientRouter.delete("/medication/delete", patientDeleteMedication);

export default patientRouter;
