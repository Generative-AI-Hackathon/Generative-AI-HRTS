import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LandingRoot from "./layout/LandingRoot";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import RouteProtection from "./components/RouteProtection";
import ResetPassword from "./pages/ResetPassword";
import LandingPage from "./pages/LandingPage";
import DoctorRoot from "./layout/DoctorRoot";
import HospitalRoot from "./layout/HospitalRoot";
import PatientRoot from "./layout/PatientRoot";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorPatientView from "./pages/DoctorPatientView";
import DoctorHistory from "./pages/DoctorHistory";
import PationtHistory from "./pages/PationtHistory";
import PatientMedication from "./pages/PatientMedication";
import DoctorChat from "./pages/DoctorChat";
import PatientChat from "./pages/PatientChat";
import HospitalDashboard from "./pages/HospitalDashboard";
import HospitalHistory from "./pages/HospitalHistory";
import HospitalChat from "./pages/HospitalChat";
import PatientAccess from "./pages/PatientAccess";
import HospitalDoctor from "./pages/HospitalDoctor";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<LandingRoot />}>
        <Route index element={<LandingPage />} />
        <Route element={<RouteProtection routeType={""} />}>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='resetpassword' element={<ResetPassword />} />
        </Route>
      </Route>

      <Route path='/doctor' element={<DoctorRoot />} >
        <Route element={<RouteProtection routeType={"doctor"} />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="history" element={<DoctorHistory />} />
          <Route path="patientaccess" element={<DoctorPatientView />} />
          <Route path="chat" element={<DoctorChat />} />
        </Route>
      </Route>

      <Route path='/patient' element={<PatientRoot />} >
        <Route element={<RouteProtection routeType={"patient"} />}>
          <Route index element={<PationtHistory />} />
          <Route path="medication" element={<PatientMedication />} />
          <Route path="doctoraccess" element={<PatientAccess />} />
          <Route path="chat" element={<PatientChat />} />
        </Route>
      </Route>

      <Route element={<RouteProtection routeType={"hospital"} />}>
        <Route path='/hospital' element={<HospitalRoot />} >
          <Route index element={<HospitalDashboard />} />
          <Route path="history" element={<HospitalHistory />} />
          <Route path="doctor" element={<HospitalDoctor />} />
          <Route path="chat" element={<HospitalChat />} />
        </Route>
      </Route>

      {/* <Route path='*' element={<WrongRoute/>}/> */}

    </>
  )
)


export default Router;