import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
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

const darkTheme = {
    background: '#121212',
    text: '#fff'
}

const lightTheme = {
    background: '#fff',
    text: '#121212'
}

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <main>{children}</main>
        </ThemeProvider>
    )
}

export default Layout
