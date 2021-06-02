import React from 'react'
import Navbar from '../components/Layout/Navbar'
import { ProfilPicture, StyledAboutMe } from '../styles/aboutMeStyles'
import adrienPicture from '../images/me.jpg'

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Navbar />
      <div className="wrapper">
        <ProfilPicture img={adrienPicture} />
        <p>
          Après un passage dans l’industrie en tant qu’ingénieur projet, et
          plusieurs expériences entrepreneuriales, j’ai décidé de me mettre à
          mon compte en tant que développeur web.<br/><br/> J’ai pour passion de donner
          vie à vos envies, que ce soit en solo ou en équipe. Ouvert à tout
          nouveau challenge, je suis à l’écoute pour discuter de la manière dont
          je peux être utile à votre projet !<br/><br/> Préparez-vous à transformer vos
          idées en réalité !
        </p>
      </div>
    </StyledAboutMe>
  )
}

export default AboutMe
