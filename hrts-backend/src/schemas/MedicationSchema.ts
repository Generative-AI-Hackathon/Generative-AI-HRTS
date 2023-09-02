import {
  DocumentReference,
  CollectionReference,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class MedicationSchema {
  static patientMedicationRef: CollectionReference =
    adminDb.collection("PatientMedications");

  static patientMedicationDoc: (id: string) => DocumentReference = (
    id: string
  ) => this.patientMedicationRef.doc(id);
}
