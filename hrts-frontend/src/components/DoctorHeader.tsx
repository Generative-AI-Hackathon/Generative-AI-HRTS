import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';

import * as S from './../../styles';

export const DoctorHeader = () => {


  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.NavBarDiv>
      {/* <S.ImageContainer> */}
      <S.HeightFitRoundedImage src={Logo} onClick={() => { navigate("/") }}></S.HeightFitRoundedImage>
      {/* </S.ImageContainer> */}
      <S.NavItem>
        <NavLink to="/">
          <S.LinkText active={location.pathname == "/"}>Dashboard</S.LinkText>
        </NavLink>


        <NavLink to="/history">
          <S.LinkText active={location.pathname == "/history"}>History</S.LinkText>
        </NavLink>

        <NavLink to="/patientaccess">
          <S.LinkText active={location.pathname == "/patientaccess"}>My Patients</S.LinkText>
        </NavLink>


        <NavLink to="/profile" >
          <S.LinkText active={location.pathname == "/profile"}>Profile</S.LinkText>
        </NavLink>

        <NavLink to="/chat">
          <S.LinkText active={location.pathname == "/chat"}>chat</S.LinkText>
        </NavLink>

      </S.NavItem>

    </S.NavBarDiv>
  )
}

export default DoctorHeader;
