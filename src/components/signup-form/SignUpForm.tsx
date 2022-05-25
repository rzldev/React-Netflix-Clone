import React from 'react'
// Router
import { useNavigate } from 'react-router-dom';
// Hooks
import useInput, { useInputRules } from '../../hooks/use-input';
// Components
import CheckBox from '../ui/checkbox/CheckBox';
import TextField from '../ui/text-field/TextField';
import LoadingSpinner from '../ui/loading-spinner/LoadingSpinner';
// Styles
import { colors } from '@mui/material';
import { Container, Description, Header, StyledButton } from './SignUpForm.styles';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { signup } from '../../store/actions/auth-action';

function SignUpForm() {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth);
    const { loading: authLoading, emailCredential } = auth;

    const { emailIsEmpty, emailInvalid, passwordIsEmpty, passwordLessThan8 } = useInputRules();
    const email = useInput([emailIsEmpty, emailInvalid], emailCredential);
    const password = useInput([passwordIsEmpty, passwordLessThan8]);

    const formIsValid = email.isValid && password.inputIsValid;

    function submitHandler(event?: React.FormEvent) {
        event?.preventDefault();

        if (formIsValid) {
            dispatch(signup({
                email: email.value, username: '', password: password.value,
                onSuccess: () => {
                    navigate('/signup/');
                },
                onError: (message: string) => {
                    console.log(message);
                }
            }));
        }
    }

    return (
        <Container>
            <Header>
                <span className="steps">step <strong>1</strong> of <strong>3</strong></span>
                <h1 className="heading">Create a password to start your membership</h1>
            </Header>
            <Description>Just a few more steps and you're done!</Description>
            <Description>We hate paperwork, too.</Description>
            <form className="signup-form" onSubmit={submitHandler}>
                <TextField
                    label="Email"
                    variant="outlined"
                    backgroundColor="transparent"
                    textColor="black"
                    value={email.value}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => email.inputChangeHandler(e.currentTarget.value)}
                    onBlur={email.inputBlurHandler}
                    helperText={(!email.isValid) && email.errorMessage}
                    error={!email.isValid} />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    backgroundColor="transparent"
                    textColor="black"
                    value={password.value}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => password.inputChangeHandler(e.currentTarget.value)}
                    onBlur={password.inputBlurHandler}
                    helperText={(!password.isValid) && password.errorMessage}
                    error={!password.isValid} />
            </form>
            <CheckBox
                className="notify-me"
                label="Please do not email me Netflix special offers"
                fontSize="15"
                textColor={colors.grey[800]}
                checkBoxSize="28"
                checkBoxColor={colors.blue[700]} />
            <StyledButton onClick={submitHandler} disabled={(!formIsValid || authLoading)}>
                {
                    authLoading ? (
                        <span className="loading"><LoadingSpinner size="32" color="white" /></span>
                    ) : (
                        'Next'
                    )
                }
            </StyledButton>
        </Container>
    )
}

export default SignUpForm