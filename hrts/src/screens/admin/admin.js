import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./admin.css";
import DoctorList from "../../components/doctorCard";

const Admin = () => {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [doctorName, setDoctorName] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      profilePic:
        "https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg",

      roomNo: "101",
      isActive: true,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      profilePic:
        "https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg",
      roomNo: "201",
      isActive: false,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      profilePic:
        "https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg",
      roomNo: "201",
      isActive: false,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      profilePic:
        "https://i.pinimg.com/originals/37/5a/ec/375aec7e73f2699fbd0636b52a5694a1.jpg",
      roomNo: "201",
      isActive: false,
    },
  ];

  const handleIdSubmit = (e) => {
    e.preventDefault();

    const fetchedPatientData = {
      name: "John Doe",
      age: 30,
      birthDate: "1992-05-20",
      address: "123 Main St, City, State",
      profilePicture:
        "https://th.bing.com/th/id/R.04a8db5810d5d4ef76b474564a87c632?rik=Hu54NtXG2ALDpA&pid=ImgRaw&r=0",
    };
    setPatientData(fetchedPatientData);
    setPatientId("");
  };

  const handleDoctorNameSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="doctor-page-container">
        <h1>Find Patient</h1>
        <div className="form-profile-container">
          <form className="patient-form" onSubmit={handleIdSubmit}>
            <label htmlFor="patientId">Patient ID</label>
            <input
              type="text"
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {patientData ? (
            <div className="profile-container">
              <h2>Patient Card</h2>
              <div className="profile-details">
                <div className="profile-picture">
                  <img src={patientData.profilePicture} alt="Profile" />
                </div>
                <div className="profile-info">
                  <p>
                    <strong>Name:</strong> {patientData.name}
                  </p>
                  <p>
                    <strong>Age:</strong> {patientData.age}
                  </p>
                  <p>
                    <strong>Birth Date:</strong> {patientData.birthDate}
                  </p>
                  <p>
                    <strong>Address:</strong> {patientData.address}
                  </p>
                  {/* Add other necessary profile information here */}
                </div>
              </div>
            </div>
          ) : (
            <div className="patient-not-found">2
                <h1>Patient Not Found</h1>
            </div>
          )}
        </div>

        <h1>Find doctor</h1>
        <form className="doctor-form" onSubmit={handleDoctorNameSubmit}>
          <label htmlFor="doctorName">Doctor Name</label>
          <div className="doctor-form-button">
            <input
              type="text"
              id="doctorName"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <button type="submit">Find doctor</button>
          </div>
        </form>
        <div>
          <DoctorList doctors={doctors} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
