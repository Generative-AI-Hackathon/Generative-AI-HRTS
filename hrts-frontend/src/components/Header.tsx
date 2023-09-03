import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';
import { useSelector } from 'react-redux';

import * as S from './../../styles';

export const Header = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, userRole, authStatus } = useSelector(state => state.auth)


    return (
        <S.NavBarDiv>
            {/* <S.ImageContainer> */}
            <S.HeightFitRoundedImage src={Logo} onClick={() => { navigate("/") }}></S.HeightFitRoundedImage>
            {/* </S.ImageContainer> */}
            <S.NavItem>

                {authStatus == "authenticated" ?
                    <NavLink to={`/${userRole}`} >
                        <S.LinkText >Go to Your Page</S.LinkText>
                    </NavLink> :
                    <NavLink to="/">
                        <S.LinkText active={location.pathname == "/"}>HRTS</S.LinkText>
                    </NavLink>}


                {!currentUser &&
                    <NavLink to="/signin">
                        <S.LinkText active={location.pathname == "/signin"}>signin</S.LinkText>
                    </NavLink>}
            </S.NavItem>

        </S.NavBarDiv>
    )
}

export default Header;
