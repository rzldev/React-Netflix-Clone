import styled from "styled-components";

interface ContainerProps {
    show: boolean,
    duration: number
}

export const Container = styled.div<ContainerProps>`
    transition: all ${props => props.duration / 1000}s;
    transform: ${props => props.show ? 'scale(1)' : 'scale(.3)'};
    opacity: ${props => props.show ? '1' : '.3'};
    transition-timing-function: linear;
`