import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Body } from '../../styles'
import DoctorHeader from '../components/DoctorHeader'

const DoctorRoot = () => {
    return (
        <div>
            <Body>
                <DoctorHeader />
                <Outlet />
                <ToastContainer autoClose={1500} closeOnClick />
            </Body>
        </div>
    )
}

export default DoctorRoot