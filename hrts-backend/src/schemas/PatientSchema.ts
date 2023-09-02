import {
  DocumentReference,
  CollectionReference,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class PatientSchema {
  static patientRef: CollectionReference = adminDb.collection("Patients");
  static patientDoc: (id: string) => DocumentReference = (id: string) =>
    this.patientRef.doc(id);

  // static UserExtraDetailRef = adminDb.collection('userExtraDetails');
  // static UserExtraDetailDoc: (id: string) => DocumentReference = (id: string) => this.UserExtraDetailRef.doc(id);
}
