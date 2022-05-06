import styled from "styled-components"
import { colors } from "@mui/material";
import React from "react";
import Button from "../ui/button/Button";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
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
    gap: 12px;
    padding: 0;
    margin: 0 0 20px;
    
    .offer-item {
        display: flex;
        gap: 6px;
        align-items: start;
    }

    .list-bullet {
        color: ${colors.red.A700};
        margin-top: -6px;
    }

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`

export const PlanColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    border-bottom: solid 1px ${colors.grey[300]};
    padding: 20px;

    &:first-child {
        border: 0;
    }

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 8px;
    }
`

export const PlanColumnName = styled.span`
    grid-column: 1 / 3;
    color: ${colors.grey[700]};

    @media screen and (max-width: 991px) {
        grid-column: 1 / 5;
        text-align: center;
        margin: 8px 0;
    }
`

interface PlanItemProps extends React.ComponentPropsWithoutRef<'span'> {
    checked?: boolean,
}

export const PlanItem = styled.span<PlanItemProps>`
    color: ${props => props.checked ? colors.red.A700 : colors.grey[600]};
    font-weight: 600;
    transition: all .3s;
    transition-timing-function: ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        font-size: .875rem;
    }
`

export const PlanItemDevice = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: all .3s;

    .tablet {
        transform: rotate(-90deg);
    }

    > label {
        font-size: .75rem;
    }
`

export const CheckBox = styled.div`
    height: 120px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .bg-red {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${colors.red.A700};
        opacity: .7;
        transition: all .3s;
        transition-timing-function: ease-in-out;
    }

    .bg-red:after {
        content: '';
        position: absolute;
        bottom: -12px;
        right: calc(50% - 15px);
        border: solid 12px transparent;
        border-top: solid 15px ${colors.red.A700};
        opacity: .7;
        border-bottom: 0;
    }

    > label {
        color: white;
        font-weight: 600;
        z-index: 1;
        position: relative;
    }

    > input[type=checkbox] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0;
        cursor: pointer;
    }

    > input[type=checkbox]:checked + .bg-red, .bg-red:after {
        opacity: 1;
    }

    @media screen and (max-width: 991px) {
        height: 80px;

        > label {
            font-size: .75rem;
        }
    }
`

export const Note = styled.p`
    font-size: .75rem;
    color: ${colors.grey[500]};

    > a {
        color: ${colors.blue[500]};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: 600px;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 20px 0;
    margin: 40px auto 0;

    @media screen and (max-width: 991px) {
        font-size: 1.25rem;
        padding: 16px 0;
    }
`