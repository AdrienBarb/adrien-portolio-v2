import React, { useEffect } from 'react'
import { StyledContact, StyledContactWrapper } from '../styles/contactStyles'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import { onNavigationEnter } from '../animations/onNavigation'

const Contact = () => {

  useEffect(() => {
    onNavigationEnter()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Contact</title>
      </Helmet>
      <Navbar />
      <StyledContactWrapper className="animationOnNavigation">
        <StyledContact>
          <h1>EMAIL</h1>
          <a
            href="mailto:adrien-barbier@hotmail.fr"
            target="_blank"
            rel="noreferrer"
          >
            adrien-barbier@hotmail.fr
          </a>
        </StyledContact>
        <StyledContact>
          <h1>TÉLÉPHONE</h1>
          <a href="tel:+33679093818" target="_blank" rel="noreferrer">
            06 79 09 38 18
          </a>
        </StyledContact>
        <StyledContact>
          <h1>SOCIAL</h1>
          <a
            href="https://www.linkedin.com/in/adrien-barbier-5b479598/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </StyledContact>
      </StyledContactWrapper>
    </>
  )
}

export default Contact
