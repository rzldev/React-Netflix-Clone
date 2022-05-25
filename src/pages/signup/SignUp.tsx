import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux'
import { BackgroundColorType, NavbarType, uiAction } from '../../store/slices/ui-slice';
// Styles
import { Container } from './SignUp.styles'
// Components
import Footer, { FooterNavItem } from '../../components/footer/Footer';

function SignUp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.SIGNUP));
        dispatch(uiAction.setBackgroundType(BackgroundColorType.LIGHT));
    })

    return (
        <React.Fragment>
            <Container>
                <Outlet />
            </Container>

            <Footer>
                <FooterNavItem>FAQ</FooterNavItem>
                <FooterNavItem>Help Center</FooterNavItem>
                <FooterNavItem>Terms of Use</FooterNavItem>
                <FooterNavItem>Privacy</FooterNavItem>
                <FooterNavItem>Cookie Preferences</FooterNavItem>
                <FooterNavItem>Company Information</FooterNavItem>
            </Footer>
        </React.Fragment>
    )
}

export default SignUp