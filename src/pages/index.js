import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import { Helmet } from "react-helmet"

const index = () => {
  return (
    <div className="animationOnNavigation">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Home</title>
      </Helmet>
      <Homepage />
    </div>
  )
    
}

export default index
