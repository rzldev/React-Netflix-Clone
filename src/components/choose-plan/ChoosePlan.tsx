import React from 'react'
import { useNavigate } from 'react-router-dom';
// Styles
import { Container, Header, OfferItem, OfferList, StyledButton } from './ChoosePlan.styles';
// Icons
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckIcon from '@mui/icons-material/Check';

function ChoosePlan() {
    const navigate = useNavigate();

    return (
        <Container>
            <span className="check-circle">
                <CheckCircleOutlinedIcon />
            </span>
            <Header>
                <span className="steps">Step <strong> 2 </strong> of <strong>3</strong></span>
                <h1 className="heading">Choose your plan.</h1>
            </Header>
            <OfferList>
                <OfferItem>
                    <CheckIcon className="item-bullet" />
                    <span className="item-content">No Commitments, cancel anytime.</span>
                </OfferItem>
                <OfferItem>
                    <CheckIcon className="item-bullet" />
                    <span className="item-content">Everything on Netflix for one low price.</span>
                </OfferItem>
                <OfferItem>
                    <CheckIcon className="item-bullet" />
                    <span className="item-content">No ads and no extra fees. Ever</span>
                </OfferItem>
            </OfferList>
            <StyledButton onClick={() => navigate('/signup/plan-form')}>Next</StyledButton>
        </Container>
    )
}

export default ChoosePlan;