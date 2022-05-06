import { colors } from "@mui/material";
import styled from "styled-components";
import { BackgroundColorType } from "../../store/slices/uiSlice";

interface ContainerProps {
    backgroundType?: BackgroundColorType,
}

export const Container = styled.footer<ContainerProps>`
    width: 100%;
    background: ${props=> props.backgroundType === BackgroundColorType.LIGHT ? 'rgba(0, 0, 0, .05)' : 'rgba(0, 0, 0, .9)'};
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    animation: fade .3s ease;

    @keyframes fade {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .question, .netflix {
        font-size: 1rem;
        color: ${colors.grey[600]};
        letter-spacing: .75px;
    }

    .nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 992px) {
        p {
            margin: 0 0 40px;
        }

        .nav {
            grid-template-columns: 1fr 1fr;
        }
    }
`

export const NavItem = styled.span`
    font-size: 12px;
    letter-spacing: .5px;
    color: ${colors.grey[600]};
    margin: 8px 0;
`