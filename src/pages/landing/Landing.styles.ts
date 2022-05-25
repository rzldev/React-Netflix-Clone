import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import styled from 'styled-components';
// Theme
import { colors } from '@mui/material';

export const Body = styled.main`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: ${colors.grey[800]};
`

export const Heading = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 0 0 8px 0;

    @media screen and (max-width: 991px) {
        font-size: 1.7rem;
    }
`

export const Description = styled.p`
    font-size: 1.75rem;
    color: white;
    text-align: center;
    margin: 6px;

    @media screen and (max-width: 991px) {
        font-size: 1.25rem;
    }
`

export const Banner = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 1;

    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    &:before {
        content: '';
        position: absolute; 
        top: 0;
        width: 100%;
        height: 200px; 
        background: rgba(255, 255, 255, 0) linear-gradient(to top, 
            rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 70%);    
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 600px;
        background: rgba(255, 255, 255, 0) linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%);
    }

    > div {
        max-width: 600px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

        @media screen and (max-width: 600px) {
            max-width: 400px;
        }
    }
`

export const EnterEmail = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .form-label {
        color: white;
        font-size: 1rem;
        margin: 0 12px;
        text-align: center;
    }

    .email-form {
        width: 100%;
        display: flex;
        align-items: flex-start;

        .email-input-control {
            width: 100%;
        }

        .email-input {
            width: 100%;
            font-size: 24px;
            padding: 16px;
            border: none;
        }

        .email-input:focus {
            outline: none;
        }
    }

    .error {
        width: 100%;
        font-size: 14px;
        text-align: start;
        color: ${colors.orange[500]};
    }

    @media screen and (max-width: 991px) {
        .email-form {
            width: 100%;
            flex-grow: 0;
            flex-direction: column;
            align-items: center;
            gap: 4px;

            .email-input {
                border-radius: 4px;
                font-size: 16px;
            }
        }
    }
`

interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean,
}

export const ButtonSubmit = styled.button<SubmitProps>`
    flex-shrink: 0;
    background-color: ${colors.red.A700};
    border: none;
    padding: 16px 16px;
    position: relative;
    transition: all;
    transition-duration: .2s;
    cursor: pointer;

    &:disabled {
        opacity: .7;
        cursor: not-allowed;

        .submit-label {
            cursor: not-allowed;
        }
    }

    .submit-label {
        display: flex;
        align-items: center;
        font-size: 24px;
        color: white;
        opacity: ${props => props.isLoading ? 0 : 1};
        cursor: pointer;

        > svg {
            width: 28px;
        }
    }

    .loading {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 991px) {
        border-radius: 2px;
        font-size: 16px;

        > svg {
            width: 18px;
        }
    }
`

interface FeatureProps extends HTMLAttributes<HTMLDivElement> {
    isTextOnRight: boolean;
}

export const Feature = styled.div<FeatureProps>`
    height: 400px;
    background-color: black;
    display: flex;
    flex-direction: ${props => props.isTextOnRight ? 'row-reverse' : 'row'};
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 0 5%;

    .feature-header {
        flex: 1;

        > h1, p {
            text-align: left;
            margin: 16px 4px;
        }
    }

    .feature-body {
        position: relative;

        > img {
            height: 100%;
            width: 100%;
            max-height: 320px;
            object-fit: contain;
            position: relative;
            z-index: 3;
        }
    }

    .home-video {
        position: absolute;
        top: -8px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > video {
            width: 75%;
            height: 60%;
            object-fit: contain;
        }
    }

    .download-state {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;

        > div {
            height: 64px;
            width: 280px;
            display: flex;
            gap: 8px;
            border: 2px solid ${colors.grey[800]};
            border-radius: 8px;
            padding: 8px;
            z-index: 4;
            background-color: black;

            .download-state-left {
                height: 100%;
                width: auto;
                object-fit: contain;
            }

            .download-state-right {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 2px;

                .stranger-things {
                    color: white;
                    font-size: 16px;
                    margin: 0;
                }

                .downloading {
                    color: ${colors.blue[700]};
                    font-size: 12px;
                    text-align: left;
                    margin: 0;
                }
            }
        }
    }

    .teaser-video {
        position: absolute;
        top: -17%;
        left: -2px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > video {
            width: 61%;
            height: 50%;
            object-fit: contain;
        }
    }

    @media screen and (max-width: 991px) {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 0;
        padding: 40px;

        .feature-header { 
            > h1, p {
                text-align: center;
            }
        }

        .download-state > div {
            height: 56px;
            width: 240px;

            .download-state-right {
                .stranger-things {
                    font-size: 12px;
                }

                .downloading {
                    font-size: 10px;
                }
            }
            
        }
    }
`

export const Player = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    video {
        width: 220px;
        height: 165px;
    }
`