import React from 'react'
import { StyledContact, StyledContactWrapper } from '../styles/contactStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const matches = useMediaQuery('(max-width:768px)')

  const email = matches ? (
    <a href="mailto:adrien-barbier@hotmail.fr" target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
  ) : (
    <StyledContact>
      <h1>EMAIL</h1>
      <a href="mailto:adrien-barbier@hotmail.fr" target="_blank">adrien-barbier@hotmail.fr</a>
    </StyledContact>
  )

  const phone = matches ? (
    <a href="tel:+33679093818" target="_blank"><FontAwesomeIcon className="social-icon" icon={faPhone} /></a>
  ) : (
    <StyledContact>
      <h1>TÉLÉPHONE</h1>
      <a href="tel:+33679093818" target="_blank">06 79 09 38 18</a>
    </StyledContact>
  )

  const linkedin = matches ? (
    <a href="https://www.linkedin.com/in/adrien-barbier-5b479598/" target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
  ) : (
    <StyledContact>
      <h1>SOCIAL</h1>
      <a href="https://www.linkedin.com/in/adrien-barbier-5b479598/" target="_blank">Linkedin</a>
    </StyledContact>
  )

  return (
    <StyledContactWrapper className="animationOnNavigation">
        {email}
        {phone}
        {linkedin}
    </StyledContactWrapper>
  )
}

export default Contact
