import React, { useState, useRef } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import { gsap } from 'gsap/all'
import {
  StyledFullnavWrapper,
  StyledFullnav,
  StyledHumburger,
} from '../styles/fullnavStyles'

const FullNav = () => {
  const [isOpen, setOpen] = useState(false)

  let fullNav = useRef(null)
  const timeline = gsap.timeline()

  const handleAnimation = () => {
    if (isOpen) {
      timeline.to(fullNav.current, {
        duration: 0.4,
        opacity: 0,
        ease: 'power2.inOut',
      })
      timeline.to(fullNav.current, {
        duration: 0,
        css: { visibility: 'hidden' },
      })
    } else {
      timeline.to(fullNav.current, {
        duration: 0,
        css: { visibility: 'visible' },
      })
      timeline.to(fullNav.current, {
        duration: 0.4,
        opacity: 1,
        ease: 'power2.inOut',
      })
    }
  }

  return (
    <>
      <StyledHumburger isOpen={isOpen} onClick={() => handleAnimation()}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </StyledHumburger>
      <StyledFullnavWrapper ref={fullNav}>
        <StyledFullnav>
          <Link to="/about-me">A PROPOS DE MOI</Link>
          <Link to="/works">MES RÉALISATIONS</Link>
          <Link to="/contact">ME CONTACTER</Link>
        </StyledFullnav>
      </StyledFullnavWrapper>
    </>
  )
}

export default FullNav
