import { adminDb, adminAuth, auth } from "../config/firebase";
import admin from "../config/firebase";
import AuthResponse from "../models/AuthResposnse";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  DoctorSignInValidator,
  DoctorSignUpValidator,
} from "../validator/doctorAuthValidator";
import DoctorSchema from "../schemas/DoctorSchema";
import HospitalSchema from "../schemas/HospitalSchema";

export default class doctorAuthService {
  static batch = adminDb.batch();

  static async signin(data: JSON): Promise<AuthResponse> {
    let { error, value } = DoctorSignInValidator.validate(data);
    if (error) {
      throw error;
    }

    const doctor = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );

    const token = await doctor.user.getIdToken();
    return {
      token,
      verified: doctor.user.emailVerified,
      id: doctor.user.uid,
    };
  }

  static async signup(data: JSON): Promise<any> {
    let { error, value } = DoctorSignUpValidator.validate(data);
    if (error) {
      throw error;
    }

    const {
      email,
      password,
      confirmPassword,
      fullName,
      phone,
      headline,
      hospital,
    } = value;

    const doctor = await adminAuth.createUser({
      email: email,
      password: password,
    });

    await adminAuth.setCustomUserClaims(doctor.uid, { role: "doctor" });

    this.batch.set(DoctorSchema.doctorDoc(doctor.uid), {
      email,
      fullName,
      phone,
      headline,
      hospital,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    this.batch.update(HospitalSchema.hospitalDoc(hospital), {
      [`doctor`]: admin.firestore.FieldValue.arrayUnion(doctor.uid),
    });

    await this.batch.commit();
    return { verified: doctor.emailVerified, id: doctor.uid };
  }
}
