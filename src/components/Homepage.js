import React, { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { MainSection, Description, MoreInfos } from '../styles/homePageStyles'
import useKonamiCode from './Konami'
import Game from './Game'
import { onNavigationEnter } from '../animations/onNavigation'

const Homepage = () => {
  const description = useRef(null)
  const contact = useRef(null)
  const nav = useRef(null)
  const game = useRef(null)
  const knowMore = useRef(null)
  const [konamiCode] = useKonamiCode()
  const [toggle, setToggle] = useState(false)

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
  
  const fadeIn = (description, contact, nav) => {
    gsap.to(description.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(game.current, 1, { opacity: 1, y: -20, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 0, y: 0, ease: 'power4.out' })
  }
  
  const fadeOut = (description, contact, nav) => {
    gsap.to(description.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(game.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
  }

  const handleClick = () => {
    console.log(toggle)
    toggle ? fadeOut(description, contact, nav)  : fadeIn(description, contact, nav, knowMore)
    setToggle(!toggle)
    
  }

  return (
    <>
      <Navbar nav={nav} />
      <MainSection>
        <Game game={game} konamiCode={konamiCode} />
        <Description className="animationOnHomepage" ref={description}>
          <h1>Développeur web freelance</h1>
          <p>
            Du conseil à la réalisation, j’ai pour passion de donner vie à vos
            idées: <strong>Site internet</strong>,{' '}
            <strong>application web</strong>, <strong>API</strong>. Ouvert à
            tout nouveau challenge, je suis à l’écoute pour discuter de la
            manière dont je peux être utile à votre projet !
          </p>
          <MoreInfos className="animationOnHomepage" onClick={handleClick}>
            Let's play !
          </MoreInfos>
        </Description>
      </MainSection>
    </>
  )
}

export default Homepage
