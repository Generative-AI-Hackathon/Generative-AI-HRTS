import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';

import * as S from './../../styles';

export const DoctorHeader = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const lastPath = location.pathname.split('/').pop();

  return (
    <S.NavBarDiv>
      {/* <S.ImageContainer> */}
      <S.HeightFitRoundedImage src={Logo} onClick={() => { navigate("/") }}></S.HeightFitRoundedImage>
      {/* </S.ImageContainer> */}
      <S.NavItem>
        <NavLink to="">
          <S.LinkText active={lastPath == "doctor"}>Dashboard</S.LinkText>
        </NavLink>


        <NavLink to="history">
          <S.LinkText active={lastPath == "history"}>History</S.LinkText>
        </NavLink>

        <NavLink to="patientaccess">
          <S.LinkText active={lastPath == "patientaccess"}>My Patients</S.LinkText>
        </NavLink>


        <NavLink to="profile" >
          <S.LinkText active={lastPath == "profile"}>Profile</S.LinkText>
        </NavLink>

        <NavLink to="chat">
          <S.LinkText active={lastPath == "chat"}>chat</S.LinkText>
        </NavLink>

      </S.NavItem>

    </S.NavBarDiv>
  )
}

export default DoctorHeader;
