
import MedicationCard from '../components/MedicationCard';
import './../../styles/patientMedication.css';

const PatientMedication = () => {
  const medications = [
    {
      type: 'Antibiotic',
      description:
        'Amoxicillin is an antibiotic used to treat various bacterial infections such as respiratory tract infections, ear infections, and urinary tract infections.',
      startdate: Date.now(),
      enddate: Date.now(),
    },
    {
      type: 'Analgesic',
      description:
        'Ibuprofen is an analgesic medication commonly used to relieve pain, reduce inflammation, and lower fever.',
      startdate: Date.now(),
      enddate: Date.now(),
    },
    {
      type: 'Antidepressant',
      description:
        'Sertraline is an antidepressant medication prescribed to treat depression, obsessive-compulsive disorder (OCD), panic disorder, and other mental health conditions.',
      startdate: Date.now(),
      enddate: Date.now(),
    },
    {
      type: 'Antihistamine',
      description:
        'Loratadine is an antihistamine medication used to relieve allergy symptoms such as sneezing, runny nose, itching, and watery eyes.',
      startdate: Date.now(),
      enddate: Date.now(),
    },
    {
      type: 'Anti-inflammatory',
      description:
        'Prednisone is an anti-inflammatory medication often prescribed to reduce inflammation and suppress the immune system in conditions such as asthma, arthritis, and autoimmune disorders.',
      startdate: Date.now(),
      enddate: Date.now(),
    },
  ];

  return (
    <div className="medication-container">
      <h1>Patient Medication</h1>
      <div className="medication-cards">
        {medications.map((medication) => (
          <MedicationCard medication={medication} key={medication.type} />
        ))}
      </div>
    </div>
  );
};

export default PatientMedication;