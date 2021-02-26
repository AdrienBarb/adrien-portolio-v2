import React from 'react'
import { StyledContact, StyledContactWrapper } from '../styles/contactStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const matches = useMediaQuery('(max-width:768px)')

  console.log(matches)

  const email = matches ? (
    <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
  ) : (
    <StyledContact>
      <h1>EMAIL</h1>
      <a>adrien-barbier@hotmail.fr</a>
    </StyledContact>
  )

  const phone = matches ? (
    <FontAwesomeIcon className="social-icon" icon={faPhone} />
  ) : (
    <StyledContact>
      <h1>TELEPHONE</h1>
      <a>06 79 09 38 18</a>
    </StyledContact>
  )

  const linkedin = matches ? (
    <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
  ) : (
    <StyledContact>
      <h1>SOCIAL</h1>
      <a>Linkedin</a>
    </StyledContact>
  )

  return (
    <StyledContactWrapper>
        {email}
        {phone}
        {linkedin}

    </StyledContactWrapper>
  )
}

export default Contact
