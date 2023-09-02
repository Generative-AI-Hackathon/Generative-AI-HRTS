import React from "react";
import "./doctorCard.css";

const DoctorCard = ({ doctor }) => {
  const { name, profilePic, roomNo, isActive } = doctor;

  return (
    <div className="doctor-card">
      <img className="profile-pic" src={profilePic} alt={`${name}'s Profile`} />
      <h3>{name}</h3>
      <p>Room No: {roomNo}</p>
      <div className="bottom-card">
        <div className={`status-dot ${isActive ? "active" : "inactive"}`} />
        <button class="assign-to-doctor-button" type="submit">
          Assign patient
        </button>
      </div>
    </div>
  );
};

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
