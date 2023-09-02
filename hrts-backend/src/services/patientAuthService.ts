import { adminDb, adminAuth, auth } from "../config/firebase";
import admin from "../config/firebase";
import AuthResponse from "../models/AuthResposnse";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  PatientSignInValidator,
  PatientSignUpValidator,
} from "../validator/patientAuthValidator";
import PatientSchema from "../schemas/PatientSchema";

export default class PatientAuthService {
  static batch = adminDb.batch();

  static async signin(data: JSON): Promise<AuthResponse> {
    let { error, value } = PatientSignInValidator.validate(data);
    if (error) {
      throw error;
    }
    const patient = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    const token = await patient.user.getIdToken();
    return {
      token,
      verified: patient.user.emailVerified,
      id: patient.user.uid,
    };
  }

  static async signup(data: JSON): Promise<any> {
    let { error, value } = PatientSignUpValidator.validate(data);
    if (error) {
      throw error;
    }

    const { email, password, name, gender, birthDate, phone } = value;

    const patient = await adminAuth.createUser({
      email: email,
      password: password,
    });

    adminAuth
      .setCustomUserClaims(patient.uid, { patient: true })
      .then(() => {});

    this.batch.set(PatientSchema.patientDoc(patient.uid), {
      email,
      phone,
      name,
      gender,
      birthDate,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    await this.batch.commit();
    return { verified: patient.emailVerified, id: patient.uid };
  }
}
