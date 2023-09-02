import {
  DocumentReference,
  CollectionReference,
  DocumentData,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class HospitalSchema {
  static hospitalRef: CollectionReference = adminDb.collection("Hospitals");
  static hospitalDoc: (id: string) => DocumentReference = (id: string) =>
    this.hospitalRef.doc(id);
  // static myDoctorRef: (id: string) => CollectionReference = (id: string) =>
  //   this.hospitalDoc(id).collection("Doctors");
  // static myDoctorDoc: (id: string, doctorId: string) => DocumentReference = (id: string, doctorId: string) =>
  //   this.myDoctorRef(id).doc(doctorId);
}
