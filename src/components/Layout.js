import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useGlobalStateContext } from '../context/globalContext'
import { GlobalStyle, StyledLayout } from '../styles/globalStyles'


const darkTheme = {
  background: '#121212',
  text: '#fff',
  gray: '#595E5F',
}

const lightTheme = {
  background: '#fff',
  text: '#121212',
  gray: '#595E5F',
}

const Layout = ({ children }) => {
  const { currentTheme } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledLayout>{children}</StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
