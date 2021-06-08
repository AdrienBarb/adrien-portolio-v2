import React, { useRef, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import gsap from 'gsap'
import {
  StyledMainSection,
  StyledDescription,
} from '../../styles/homePageStyles'
import ReactTypingEffect from 'react-typing-effect'

const Homepage = () => {
  return (
    <StyledMainSection>
      <div className="description">
        <h1>
          J’accompagne les{' '}
          <span className="typing">
            <ReactTypingEffect
              text={['entrepreneurs', 'entreprises', 'marques']}
              eraseDelay={2000}
            />
          </span>
          <br />
          dans la réalisation de leurs projets digitaux.
        </h1>
      </div>
    </StyledMainSection>
  )
}

export default Homepage
