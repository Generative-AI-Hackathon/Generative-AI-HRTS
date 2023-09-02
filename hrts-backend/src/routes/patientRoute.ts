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
patientRouter.post("/medication/add", patientAddHistory);
patientRouter.get("/medication/get", patientGetHistory);
patientRouter.get("/medication/filter", patientFilterHistory);
patientRouter.put("/medication/update", patientUpdateHistory);
patientRouter.delete("/medication/delete", patientDeleteMedication);



//Medication
patientRouter.post("/medication/add", patientAddMedication);
patientRouter.get("/medication/get", patientGetMedication);
patientRouter.get("/medication/filter", patientFilterMedication);
patientRouter.put("/medication/update", patientUpdateMedication);
patientRouter.delete("/medication/delete", patientDeleteMedication);

export default patientRouter;
