import { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
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
`