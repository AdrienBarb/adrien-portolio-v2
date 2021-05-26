import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

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
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        overflow-x: hidden;
        font-family: 'Rubik';
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #fp-nav {
        left: 17px !important;
        bottom: -1rem;
        top: inherit;
        width: fit-content;

    }
    
    #fp-nav ul li .fp-tooltip.fp-right {
        left: 20px !important;
        color: #1E5871 !important;
        overflow: inherit;
    }

    #fp-nav ul li a span {
        background: #e16f64;
    }
`

export const StyledLayout = styled.div`
  margin: 0 auto;
`
