import { colors } from "@mui/material";
import styled from "styled-components";
import Button from "../ui/button/Button";

export const Container = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    .check-circle {
        width: 64px;
        height: 64px;
        color: ${colors.red.A700};
        margin-bottom: 16px;

        > svg {
            width: 100%;
            height: 100%;
        }
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

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

export const OfferList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0;
    margin: 0 40px 20px;
`

export const OfferItem = styled.li`
    display: flex;
    align-items: start;
    gap: 6px;

    .item-bullet {
        color: ${colors.red.A700};
        margin-top: -4px;
    }

    .item-content {

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