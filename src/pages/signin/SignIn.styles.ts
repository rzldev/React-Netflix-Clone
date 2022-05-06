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
    z-index: -1;

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
    background-color: rgba(0, 0, 0, .8);
    border: 8px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    margin: 120px 24px 64px;
    padding: 20px 64px 64px;
    z-index: 1;

    h1 {
        color: white;
        margin-bottom: 24px;
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
        margin-top: 4px;

        > a {
            font-size: 12px;
            color: #999;
            letter-spacing: .25px;
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
    margin-top: 16px;
`

export const SignUpContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

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
        font-size: 14px;
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