import { adminDb, adminAuth, auth } from "../config/firebase";
import admin from "../config/firebase";
import AuthResponse from "../models/AuthResposnse";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  HospitalSignInValidator,
  HospitalSignUpValidator,
} from "../validator/hospitalAuthValidator";
import HospitalSchema from "../schemas/HospitalSchema";

export default class HospitalAuthService {
  static batch = adminDb.batch();

  static async signin(data: JSON): Promise<AuthResponse> {
    let { error, value } = HospitalSignInValidator.validate(data);
    if (error) {
      throw error;
    }
    const hospital = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    const token = await hospital.user.getIdToken();
    return {
      token,
      verified: hospital.user.emailVerified,
      id: hospital.user.uid,
    };
  }

  static async signup(data: JSON): Promise<any> {
    let { error, value } = HospitalSignUpValidator.validate(data);
    if (error) {
      throw error;
    }

    const {
      email,
      password,
      confirmPassword,
      fullName,
      address,
      city,
      phone,
      type,
      services,
      description,
      doctorCount,
      historyCount,
      doctor,
    } = value;

    const hospital = await adminAuth.createUser({
      email: email,
      password: password,
    });

    await adminAuth.setCustomUserClaims(hospital.uid, { role: "hospital" })
  

    this.batch.set(HospitalSchema.hospitalDoc(hospital.uid), {
      email,
      fullName,
      phone,
      address,
      city,
      type,
      services,
      description,
      doctorCount,
      historyCount,
      doctor,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    await this.batch.commit();
    return { verified: hospital.emailVerified, id: hospital.uid };
  }
}
