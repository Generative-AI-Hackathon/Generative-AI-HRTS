import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Body } from '../../styles'
import HospitalHeader from '../components/HospitalHeader'

const HospitalRoot = () => {
  return (
    <div>
      <Body>
        <HospitalHeader />
        <Outlet />
        <ToastContainer autoClose={1500} closeOnClick />
      </Body>
    </div>
  )
}

export default HospitalRoot