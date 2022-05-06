import styled from "styled-components";
import Button from "../ui/button/Button";

export const Container = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .devices {
        width: 70%;
        margin-bottom: 20px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    .steps {
        font-size: .75rem;
        text-transform: uppercase;
        margin-bottom: 6px;
        margin: 0;
    }

    .heading {
        font-size: 2.125rem;
        font-weight: 600;
        margin-bottom: 24px;
        margin: 0;

        @media screen and (max-width: 991px) {
            font-size: 1.75rem;
        }
    }
`

export const Description = styled.p`
    font-size: 1.125rem;
    padding: 0 40px;
    margin-bottom: 40px;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 991px) {
        font-size: 1rem;
        padding: 0 20px;
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 20px 0;
    margin-top: 16px;

    @media screen and (max-width: 991px) {
        font-size: 1.25rem;
        padding: 16px 0;
    }
`