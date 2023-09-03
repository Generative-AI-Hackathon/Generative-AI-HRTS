import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';
import { useSelector } from 'react-redux';

import * as S from './../../styles';

export const HospitalHeader = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth.currentUser)


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

                <NavLink to="/doctor">
                    <S.LinkText active={location.pathname == "/doctor"}>My Doctors</S.LinkText>
                </NavLink>

                <NavLink to="/chat" >
                    <S.LinkText active={location.pathname == "/chat"}>chat</S.LinkText>
                </NavLink>

            </S.NavItem>

        </S.NavBarDiv>
    )

}

export default HospitalHeader;
