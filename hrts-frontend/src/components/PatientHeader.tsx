import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';
import { useSelector } from 'react-redux';

import * as S from './../../styles';

export const PatientHeader = () => {


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
                    <S.LinkText active={location.pathname == "/"}>History</S.LinkText>
                </NavLink>

                <NavLink to="/medication">
                    <S.LinkText active={location.pathname == "/medication"}>Medications</S.LinkText>
                </NavLink>

                <NavLink to="/chat">
                    <S.LinkText active={location.pathname == "/history"}>Chat</S.LinkText>
                </NavLink>

                <NavLink to="/profile" >
                    <S.LinkText active={location.pathname == "/profile"}>Profile</S.LinkText>
                </NavLink>

            </S.NavItem>

        </S.NavBarDiv>
    )
}

export default PatientHeader;
