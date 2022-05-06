import React from 'react'
import { colors } from '@mui/material';
// Hooks
import useInput, { useInputRules } from '../../hooks/use-input';
// Components
import CheckBox from '../ui/checkbox/CheckBox';
import TextField from '../ui/text-field/TextField';
// Styles
import { Container, Description, Header, StyledButton } from './SignUpForm.styles';

function SignUpForm() {

    const { emailIsEmpty, emailInvalid, passwordIsEmpty, passwordLessThan8 } = useInputRules();
    const email = useInput([emailIsEmpty, emailInvalid]);
    const password = useInput([passwordIsEmpty, passwordLessThan8]);

    return (
        <Container>
            <Header>
                <span className="steps">step <strong>1</strong> of <strong>3</strong></span>
                <h1 className="heading">Create a password to start your membership</h1>
            </Header>
            <Description>Just a few more steps and you're done!</Description>
            <Description>We hate paperwork, too.</Description>
            <form className="signup-form">
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
            <StyledButton>Next</StyledButton>
        </Container>
    )
}

export default SignUpForm