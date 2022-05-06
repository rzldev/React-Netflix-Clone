import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { NavbarType, uiAction } from '../../store/slices/uiSlice';
// Styles
import { Container, GlobalStyle, SignInButton, SignUpContainer, Wrapper } from './SignIn.styles'
// Components
import CheckBox from '../../components/ui/checkbox/CheckBox'
import CustomTextField from '../../components/ui/text-field/TextField'
import Footer, { FooterNavItem } from '../../components/footer/Footer';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import { colors } from '@mui/material';


function SignIn() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.ONLY_LOGO));
    })

    return (
        <Wrapper>
            {/* Override Global Style */}
            <GlobalStyle />

            {/* Sign In Form */}
            <Container>
                <h1>Sign In</h1>

                {/* Sign In Form */}
                <form>
                    <CustomTextField
                        label="Email or Phone Number"
                        variant="filled"
                        helperText="Test"
                        errorColor={colors.orange[500]}
                        error />
                    <CustomTextField
                        label="Password"
                        type="password"
                        variant="filled"
                        helperText="Test"
                        errorColor={colors.orange[500]}
                        error />
                </form>
                <SignInButton>Sign In</SignInButton>
                <div className="additional">
                    <CheckBox
                        label="Remember me"
                        fontSize="12"
                        textColor="#aaa"
                        checkBoxColor="#999"
                        checkBoxSize="20" />

                    <Link to="#" >Need help?</Link>
                </div>

                {/* Sign Up */}
                <SignUpContainer>
                    <div className="facebook-login">
                        <FacebookIcon />
                        <span>Login with Facebook</span>
                    </div>
                    <div className="signup">
                        <span>New to Netflix? </span>
                        <Link to="#">Sign up now.</Link>
                    </div>
                    <p className="policy">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#">Learn more.</Link></p>
                </SignUpContainer>
            </Container>

            {/* Footer */}
            <Footer>
                <FooterNavItem>FAQ</FooterNavItem>
                <FooterNavItem>Help Center</FooterNavItem>
                <FooterNavItem>Terms of Use</FooterNavItem>
                <FooterNavItem>Privacy</FooterNavItem>
                <FooterNavItem>Cookie Preferences</FooterNavItem>
                <FooterNavItem>Corporate Information</FooterNavItem>
            </Footer>
        </Wrapper>
    )
}

export default SignIn