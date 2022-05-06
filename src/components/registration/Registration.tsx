import React from 'react'
import { useNavigate } from 'react-router-dom';
// Styles
import { Container, Description, Header, StyledButton } from './Registration.styles';

function Registration() {
    const navigate = useNavigate();

    return (
        <Container>
            <img className="devices" src="/assets/devices.png" alt="devices.png" />
            <Header>
                <span className="steps">Step <strong>1</strong> of <strong>3</strong></span>
                <h1 className="heading">Finish setting up your account</h1>
            </Header>
            <Description>Netflix is personalized for you. <br />Create a password to watch on any device at any time.</Description>
            <StyledButton onClick={() => navigate('/signup/form')}>Next</StyledButton>
        </Container>
    )
}

export default Registration;