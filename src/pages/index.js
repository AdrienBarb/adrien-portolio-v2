import React from 'react'
import Homepage from '../components/Homepage'
import { Helmet } from "react-helmet"

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Home</title>
      </Helmet>
      <Homepage />
    </>
  )
    
}

export default index
