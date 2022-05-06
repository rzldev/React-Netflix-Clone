import styled, { createGlobalStyle } from "styled-components"
import { BackgroundColorType } from "../store/slices/uiSlice"

interface GlobalProps {
    backgroundType?: BackgroundColorType,
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
    body {
        background-color: ${props => props.backgroundType === BackgroundColorType.LIGHT ? 'white' : '#111'};
    }
`

export const Layout = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
`

export const Header = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`