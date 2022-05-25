import { colors } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../../components/ui/button/Button";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url('/assets/landing-banner.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 40%;
        background: rgba(0, 0, 0, 0) linear-gradient(to top,
            rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .6) 80%, rgba(0, 0, 0, .85) 90%);
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0) linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .6) 90%);
    }

    footer {
        position: relative;
        z-index: 1;
    }
`

export const Container = styled.div`
    max-width: 500px;
    min-height: 640px;
    background-color: rgba(0, 0, 0, .8);
    border: 8px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin: 120px 24px 80px;
    padding: 20px 64px 64px;
    z-index: 1;

    h1 {
        color: white;
        margin-bottom: 32px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .additional {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;

        > a {
            font-size: 14px;
            color: #999;
            letter-spacing: .5px;
            text-decoration: none;
        }

        > a:hover {
            color: #ddd;
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 991px) {
        h1 {
            font-size: 1.75rem;
        }
    }
`

export const SignInButton = styled(Button)`
    width: 100%;
    height: 56px;
    margin-top: 24px;

    &:disabled {
        opacity: .7;
        cursor: not-allowed;
    }
`

export const SignUpContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .facebook-login {
        display: flex;
        align-items: center;
        gap: 6px;
        background-color: transparent;

        > span {
            font-size: 12px;
            letter-spacing: .5px;
            color: ${colors.grey[600]};
        }

        > svg {
            color: ${colors.grey[400]};
        }
    }

    .signup {
        font-size: 1rem;

        > span {
            color: ${colors.grey[500]};
        }

        > a {
            color: white;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .policy {
        font-size: 12px;
        color: ${colors.grey[500]};

        > a {
            color: ${colors.blue[500]};
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`