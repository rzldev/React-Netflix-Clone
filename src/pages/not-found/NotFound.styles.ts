import { colors } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('/assets/lost-image.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 720px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background-color: rgba(0, 0, 0, .2);
    border: 4px solid rgba(0, 0, 0, .1);
    border-radius: 16px;
    padding: 40px;
    margin: 16px;

    h1 {
        font-size: 3rem;
        color: white;
        text-align: center;
        margin: 0px;
    }

    p {
        font-size: 1.25rem;
        color: white;
        text-align: center;
        margin: 0px;
    }

    button {
        background-color: white;
        font-weight: 700;
        border: none;
        border-radius: 4px;
        padding: 12px 20px;
        cursor: pointer;
    }

    @media screen and (max-width: 991px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const Error = styled.div`
    position: relative;
    color: white;
    font-size: 1.5rem;
    opacity: .9;

    &:before {
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -12px;
        width: 3px;
        background-color: ${colors.red[800]};
    }

    @media screen and (max-width: 9991px) {
        font-size: 1rem;
    }
`

export const Tag = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    
    span {
        color: white;
        opacity: .8;
    }

    @media screen and (max-width: 991px) {
        span {
            font-size: .75rem;
        }
    }
`