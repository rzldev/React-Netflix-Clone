import styled from "styled-components";
import { Props } from "./LoadingSpinner";

export const LoadingSpinner = styled.div<Props>`
    display: inline-block;
    position: relative;
    width: ${props => props.size ??'80'}px;
    height: ${props => props.size ??'80'}px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${props => props.size ?? '64'}px;
        height: ${props => props.size ?? '64'}px;
        /* margin: 8px; */
        border: ${props => Number(props.size) / 8 ?? '8'}px solid ${props => props.color ?? 'white'};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.color ?? 'white'} transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -.45s;
        }

        &:nth-child(2) {
            animation-delay: -.3s;
        }

        &:nth-child(3) {
            animation-delay: -.15s;
        }

        @keyframes lds-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`