import { adminDb, adminAuth, auth } from "../config/firebase";
import admin from "../config/firebase";
import AuthResponse from "../models/AuthResposnse";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  PatientSignInValidator,
  PatientSignUpValidator,
} from "../validator/patientAuthValidator";
import { CreateMedicationValidator, UpdateMedicationValidator } from "../validator/patientMedicationValidator";
import MedicationSchema from "../schemas/MedicationSchema";

export default class MedicationService {
  static batch = adminDb.batch();

  static async add(data: JSON): Promise<any> {
    let { error, value } = CreateMedicationValidator.validate(data);
    if (error) {
      throw error;
    }

    const { name, startDate, endDate, userId, doctorId, hospitalId } = value;
    const id = MedicationSchema.patientMedicationRef.doc().id;
    adminDb.collection("PatientMedications").doc(id).set({
      name,
      startDate,
      endDate,
      userId,
      doctorId,
      hospitalId,
    });
    return { id };
  }

  static async update(data: JSON): Promise<null> {
    let { error, value } = UpdateMedicationValidator.validate(data);
    if (error) {
      throw error;
    }

    const { name, startDate, endDate, userId } = value;
    adminDb.collection("PatientMedications").doc(userId).set(
      {
        name,
        startDate,
        endDate,
        userId,
      },
      { merge: true }
    );
    return null;
  }
}
