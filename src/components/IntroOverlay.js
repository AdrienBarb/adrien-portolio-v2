import React from 'react'
import { StyledIntroOverlay } from '../styles/introOverlayStyles'

const IntroOverlay = ({ overlay }) => {
  return (
    <StyledIntroOverlay ref={overlay}>
      <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>
    </StyledIntroOverlay>
  )
}

export default IntroOverlay
