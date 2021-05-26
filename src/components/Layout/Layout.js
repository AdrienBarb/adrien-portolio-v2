import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, StyledLayout } from '../../styles/globalStyles'
import Navbar from './Navbar'

const lightTheme = {
  background: '#F2ECDE',
  text: '#1E5871',
  gray: '#595E5F',
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Navbar />
      <StyledLayout>{children}</StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
