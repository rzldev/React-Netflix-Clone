import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
`
interface TransitionFadeProps extends HTMLAttributes<HTMLDivElement> {
    show: boolean,
    duration: string | number,
}

export const TransitionFade = styled.div<TransitionFadeProps>`
    transition: all ${props => props.duration}s;
    transform: ${props => props.show ? 'scale(1)' : 'scale(.7)'};
    opacity: ${props => props.show ? '1' : '0'};
    transition-timing-function: linear;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`