// import { colors } from "@mui/material";
// import styled from "styled-components";
import { LoadingSpinner as LS } from './LoadingSpinner.styles';

export interface Props {
    className?: string,
    size?: string | number,
    color?: string,
}

function LoadingSpinner({ className, size, color }: Props): React.ReactElement {
    return (
        <LS className={className} size={size} color={color}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LS>
    )
}

export default LoadingSpinner;