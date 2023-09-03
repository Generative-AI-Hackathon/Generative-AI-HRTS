import React from 'react'
import PatientHistoryCard from '../components/PatientHistoryCard'
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import "./../components/PatientHistoryCard.css"
import Spinner from '../components/Spinner';
import sagaActions  from '../redux/actions';

const PationtHistory = () => {
  const dispatch = useDispatch()
  const { histories, historiesStatus } = useSelector(state => state.history)
  
  useEffect(() => {
    dispatch({ type: sagaActions.LOADHISTORY })
    }, [])

  if (historiesStatus === "loading") { 
    return <Spinner/>
  }


  const patients = [
    {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description": "Description about the desease goes here"
    },
    {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description": "Description about the desease goes here"
    }, {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description": "Description about the desease goes here"
    }, {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description": "Description about the desease goes here"
    }, {
      "type": "Desease type here",
      "date": Date.now(),
      "doctor": "Dr. Fikremariam Anteneh",
      "hospital": "Hospital name here",
      "description": "Description about the desease goes here"
    },

  ]


  return (
    <div className='patient-history-container'>
      <h1>Patient history</h1>
      {histories.map((patient) => (
        <div className='patient-history'>
          <PatientHistoryCard patient={patient} />
        </div>
      ))}
    </div>
  );
};

export default PationtHistory