import styled, { createGlobalStyle } from 'styled-components'
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
        overflow-x: hidden;
        font-family: 'Roboto Mono';
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export const StyledLayout = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`