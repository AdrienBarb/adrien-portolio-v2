import React from 'react'
import Layout from './src/components/Layout'

import { GlobalProvider } from './src/context/globalContext'

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      <Layout>{element}</Layout>
    </GlobalProvider>
  )
}
