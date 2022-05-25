import styled from "styled-components";
// Components
import Button from '../ui/button/Button';

export const Container = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .signup-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 16px;
    }

    .notify-me {
        margin-bottom: 16px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;

    .steps {
        text-transform: uppercase;
        font-size: .75rem;
    }

    .heading {
        font-size: 2.125rem;
        font-weight: 600;
        margin: 0;

        @media screen and (max-width: 991px) {
            font-size: 1.75rem;
        }
    }
`

export const Description = styled.p`
    font-size: 1.125rem;
    margin: 0;

    @media screen and (max-width: 991px) {
        font-size: 1rem;
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    max-height: 64px;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 20px 0;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: .7;
        cursor: not-allowed;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.25rem;
        padding: 16px 0;
    }
`