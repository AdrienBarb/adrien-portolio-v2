import React, { useRef, useEffect } from 'react'
import Navbar from '../Navbar'
import gsap from 'gsap'
import {
  StyledMainSection,
  StyledDescription,
} from '../../styles/homePageStyles'
import { onNavigationEnter } from '../../animations/onNavigation'

const Homepage = () => {
  const description = useRef(null)
  const nav = useRef(null)

  useEffect(() => {
    const t1 = gsap.timeline()

    t1.to('.animationOnHomepage', 1, {
      opacity: 1,
      ease: 'expo.inOut',
      stagger: 0.2,
    })
  }, [])

  useEffect(() => {
    onNavigationEnter()
  }, [])

  return (
    <>
      <Navbar nav={nav} />
      <StyledMainSection>
        <StyledDescription className="animationOnHomepage" ref={description}>
          <h1>Web Developer</h1>
          <p>
            My passion is to bring your ideas to life: <strong>website</strong>, <strong>web application</strong>, <strong>MVP</strong>, I’m open to any new challenge ! An idea ? Let’s talk about it !
          </p>
          <p>
            You can call me : <strong> <a href="tel:+33679093818">+33 (0)6 79 09 38 18</a></strong> <br/>or email me :
            <strong> <a href="mailto:adrien-barbier@hotmail.fr">adrien-barbier@hotmail.fr</a></strong>.
          </p>
        </StyledDescription>
      </StyledMainSection>
    </>
  )
}

export default Homepage
