import {
  DocumentReference,
  CollectionReference,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class PatientAccessSchema {
  static patientAccessRef: CollectionReference =
    adminDb.collection("PatientMedications");

  static patientAccessDoc: (id: string) => DocumentReference = (
    id: string
  ) => this.patientAccessRef.doc(id);
}
