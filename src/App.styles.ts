import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        min-width: 400px;
    }

    body {
        margin: 0;
    }

    * {
        box-sizing: border-box;
        font-family: 'Helvetica', 'Arial', sans-serif;
        letter-spacing: .5px;
    }

`