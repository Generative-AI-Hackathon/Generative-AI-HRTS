import {
  DocumentReference,
  CollectionReference,
  DocumentData,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class DoctorSchema {
  static doctorRef: CollectionReference = adminDb.collection("Doctors");
  static doctorDoc: (id: string) => DocumentReference = (id: string) =>
    this.doctorRef.doc(id);
}
