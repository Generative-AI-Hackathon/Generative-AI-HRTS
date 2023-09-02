import {
  DocumentReference,
  CollectionReference,
} from "firebase-admin/firestore";
import { adminDb } from "../config/firebase";

export default class HistorySchema {
  static historyRef: CollectionReference =
    adminDb.collection("Historys");

  static historyDoc: (id: string) => DocumentReference = (
    id: string
  ) => this.historyRef.doc(id);
}
