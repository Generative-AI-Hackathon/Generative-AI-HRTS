import React from 'react'
import './hospitalDashbord.scss'
import { Doctors, chartBoxUser } from '../data/doctors_data.ts'
import ChartBox from '../components/chartBox/ChartBox.tsx'
import PieChartBox from '../components/pieCartBox/PieChartBox.tsx'
import BigChartBox from '../components/bigChartBox/BigChartBox.tsx'
import BarChartBox from '../components/barChartBox/BarChartBox.tsx'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue } from '../data/menu_data.ts'

const HospitalDashboard = () => {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <div className="topBox">
            <h1>Doctors</h1>
            <div className="list">
              {Doctors.map(user => (
                <div className="listItem" key={user.id}>
                  <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userTexts">
                      <span className="username">{user.username}</span>
                      <span className="email">{user.email}</span>
                    </div>
                  </div>
                  <span className="amount">{user.phone}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="box box6">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="box box7">
          <BigChartBox />
        </div>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </>
  )
}

export default HospitalDashboard