import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Body } from '../../styles'
import HospitalHeader from '../components/HospitalHeader'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Footer from '../components/footer/footer';
import Menu from '../components/menu/menu';
import "../styles/global.scss";

const queryClient = new QueryClient();

const HospitalRoot = () => {
  return (
    <>

      <div className="main">
        <HospitalHeader />

        <div className="container">
          <div className="menuContainer">
            <ToastContainer autoClose={1500} closeOnClick />
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HospitalRoot