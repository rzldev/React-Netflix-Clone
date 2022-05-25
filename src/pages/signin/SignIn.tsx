import React, { useEffect } from 'react'
// Router
import { Link, useNavigate } from 'react-router-dom';
// Hooks
import useInput, { useInputRules } from '../../hooks/use-input';
// Redux
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarType, uiAction } from '../../store/slices/ui-slice';
import { signin } from '../../store/actions/auth-action';
// Styles
import { Container, GlobalStyle, SignInButton, SignUpContainer, Wrapper } from './SignIn.styles'
// Components
import CheckBox from '../../components/ui/checkbox/CheckBox'
import TextField from '../../components/ui/text-field/TextField'
import Footer, { FooterNavItem } from '../../components/footer/Footer';
import LoadingSpinner from '../../components/ui/loading-spinner/LoadingSpinner';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import { colors } from '@mui/material';


function SignIn() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { emailCredential: emailCred, loading: authLoading } = useSelector((state: RootState) => state.auth);

    // Use input custom hook
    const { emailIsEmpty, emailInvalid, passwordIsEmpty, passwordLessThan8 } = useInputRules();
    const email = useInput([emailIsEmpty, emailInvalid], emailCred);
    const password = useInput([passwordIsEmpty, passwordLessThan8]);

    const formIsValid = email.isValid && password.inputIsValid;

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.ONLY_LOGO));
    })

    function submitFormHandler(e: React.FormEvent) {
        e?.preventDefault();

        if (formIsValid) {
            dispatch(signin({
                email: email.value, password: password.value,
                onSuccess: () => {
                    navigate('/browse', { replace: true });
                },
                onError: (message: string) => {
                    console.log(message)
                }
            }))
        }
    }

    return (
        <Wrapper>
            {/* Override Global Style */}
            <GlobalStyle />

            {/* Sign In Form */}
            <Container>
                <h1>Sign In</h1>

                {/* Sign In Form */}
                <form onSubmit={submitFormHandler}>
                    <TextField
                        label="Email or Phone Number"
                        variant="filled"
                        textColor="white"
                        value={email.value}
                        errorColor={colors.orange[500]}
                        error={!email.isValid}
                        helperText={email.errorMessage}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => email.inputChangeHandler(e.currentTarget.value)}
                        onBlur={email.inputBlurHandler} />
                    <TextField
                        label="Password"
                        type="password"
                        variant="filled"
                        textColor="white"
                        value={password.value}
                        errorColor={colors.orange[500]}
                        error={!password.isValid}
                        helperText={password.errorMessage}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => password.inputChangeHandler(e.currentTarget.value)}
                        onBlur={password.inputBlurHandler} />
                </form>
                <SignInButton onClick={submitFormHandler} disabled={(!formIsValid || authLoading)}>
                    {
                        authLoading ? (
                            <span className="loading"><LoadingSpinner size="24" color="white" /></span>
                        ) : (
                            'Sign In'
                        )
                    }
                </SignInButton>
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
                        <Link to="/signup/registration">Sign up now.</Link>
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