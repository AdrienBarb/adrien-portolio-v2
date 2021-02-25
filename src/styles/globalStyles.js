import { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.text};
        font-family: 'Roboto mono';
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`