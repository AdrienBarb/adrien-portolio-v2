import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, StyledLayout } from '../../styles/globalStyles'
import { motion } from 'framer-motion'

const lightTheme = {
  background: '#F2ECDE',
  text: '#1E5871',
  gray: '#595E5F',
}

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <StyledLayout>{children}</StyledLayout>
      </ThemeProvider>
    </motion.div>
  )
}

export default Layout
