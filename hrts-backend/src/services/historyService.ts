import HistorySchema from "../schemas/HistorySchema";
import { adminDb, adminAuth, auth } from "../config/firebase";
import { CreateHistoryValidator } from "../validator/historyValidator";

export default class HistoryService {
  static batch = adminDb.batch();

  static async add(data: JSON): Promise<any> {
    let { error, value } = CreateHistoryValidator.validate(data);
    if (error) {
      throw error;
    }

    const id = HistorySchema.historyRef.doc().id;
      adminDb.collection("Historys").doc(id).set({
        ...value,

    });
    return { id };
  }

    static async loadhistory(id: string): Promise<any> {
        console.log(id);
        const history = await adminDb
          .collection("Historys")
          .where("userId", "==", id)
            .get();
        let historys: any[]= [];

        await history.forEach(async (doc) => { 
            let data = doc.data();
            data.id = doc.id;
            const { hospitalId, doctorId } = data;
            let hospital = await adminDb
              .collection("Hospitals")
              .doc(hospitalId)
              .get();
            let doctor = await adminDb
              .collection("Doctors")
              .doc(doctorId)
              .get();
            data.hospital = hospital.data()?.fullName;
            data.doctor = doctor.data()?.fullName;
            historys.push(data);
        });

        console.log(historys.length);

        return historys;
    
  }

//   static async update(data: JSON): Promise<null> {
//     let { error, value } = UpdateMedicationValidator.validate(data);
//     if (error) {
//       throw error;
//     }

//     const { name, startDate, endDate, userId } = value;
//     adminDb.collection("PatientMedications").doc(userId).set(
//       {
//         name,
//         startDate,
//         endDate,
//         userId,
//       },
//       { merge: true }
//     );
//     return null;
//   }
}
