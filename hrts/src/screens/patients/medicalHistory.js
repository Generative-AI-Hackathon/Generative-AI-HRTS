import React from "react";
import "./medicalHistory.css";

const PatientHistory = () => {
  return (
    <div className="patient-history-container">
      <h2>Patient Health and Medication History</h2>

      <div className="section">
        <h3>Personal Details</h3>
        <p>Name: John Doe</p>
        <p>Age: 35</p>
        <p>Gender: Male</p>
        <p>Contact: john.doe@example.com</p>
      </div>

      <div className="section">
        <h3>Medical History</h3>
        <p>No significant medical history</p>
      </div>

      <div className="section">
        <h3>Current Medications</h3>
        <ul>
          <li>Medication A - 10mg - Twice daily</li>
          <li>Medication B - 20mg - Once daily</li>
        </ul>
      </div>

      <div className="section">
        <h3>Allergies</h3>
        <p>No known allergies</p>
      </div>

      <div className="section">
        <h3>Additional Notes</h3>
        <p>No additional notes</p>
      </div>
    </div>
  );
};

export default PatientHistory;
