import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Body } from '../../styles'
import PatientHeader from '../components/PatientHeader'

const PatientRoot = () => {
  return (
      <div>
          <Body>
              <PatientHeader />
              <Outlet />
              <ToastContainer autoClose={1500} closeOnClick />
          </Body>
    </div>
  )
}

export default PatientRoot