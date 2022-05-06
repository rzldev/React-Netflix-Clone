import styled from "styled-components";
import { colors, TextField as TF } from "@mui/material";

interface Props {
    backgroundColor?: string,
    textColor?: string,
    errorColor?: string,
}

export default styled(({ backgroundColor, textColor, errorColor, ...props }) => <TF {...props} />) <Props>`
    > div {
        color: ${props => props.textColor ?? 'black'};
        background-color: ${props => props.backgroundColor ?? 'rgba(51, 51, 51, 0.8)'};
    }

    .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root,
    .css-o943dk-MuiFormLabel-root-MuiInputLabel-root {
        padding-top: 2px;
        font-size: 14px;
        color: ${props => props.textColor ?? '#888'};
    }

    .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
    .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-error,
    .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root.Mui-error,
    .css-1wc848c-MuiFormHelperText-root.Mui-error {
        color: ${props => props.errorColor ?? colors.red.A700};
    }

    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:hover,
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root.Mui-focused {
        background-color: rgba(51, 51, 51, 0.8);
    }

    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after,
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root.Mui-error:after {
        border-bottom: 2px solid ${colors.orange[500]};
    }
`