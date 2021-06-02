import React from 'react'
import { StyledContact } from '../styles/contactStyles'
import Navbar from '../components/Layout/Navbar'

const Contact = () => {
  return (
    <StyledContact>
      <Navbar />
      <div className="wrapper">
        <h1>
          Une question ? <br />
          besoin d’un devis ?
        </h1>
        <p>
          Ecrivez-moi :{' '}
          <a href="mailto:adrien-barbier@hotmail.fr">
            adrien-barbier@hotmail.fr
          </a>{' '}
          <br />
          Ou apellez-moi : <a href="tel:+33(0)0679093818">
            06 79 09 38 18
          </a>{' '}
          <br />
          Je réponds généralement dans la journee !
        </p>
      </div>
    </StyledContact>
  )
}

export default Contact
