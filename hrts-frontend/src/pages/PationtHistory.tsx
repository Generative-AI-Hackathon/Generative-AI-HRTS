import React from 'react'
import PatientHistoryCard from '../components/PatientHistoryCard'
import "./../components/PatientHistoryCard.css"

const PationtHistory = () => {
  const patients = [   
    {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description" : "Description about the desease goes here"
    },
    {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description" : "Description about the desease goes here"
    },{
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description" : "Description about the desease goes here"
    },{
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description" : "Description about the desease goes here"
    },{
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description" : "Description about the desease goes here"
    },
    
]


  return (
    <div className='patient-history-container'>
      <h1>Patient history</h1>
      {patients.map((patient) => (
        <div className='patient-history'>
          <PatientHistoryCard patient={patient} />
        </div>
      ))}
    </div>
  );
};

export default PationtHistory