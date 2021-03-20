import React, { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { MainSection, Description, MoreInfos, Close } from '../styles/homePageStyles'
import useKonamiCode from './Konami'
import Game from './Game'
import { onNavigationEnter } from '../animations/onNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Homepage = () => {
  const description = useRef(null)
  const nav = useRef(null)
  const game = useRef(null)
  const close = useRef(null)
  const knowMore = useRef(null)
  const [konamiCode] = useKonamiCode()
  const [toggle, setToggle] = useState(false)
  const matches = useMediaQuery('(max-width:768px)')

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
  
  const fadeIn = (description, game, nav, close) => {
    gsap.to(description.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(game.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(close.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
  }
  
  const fadeOut = (description, game, nav, close) => {
    gsap.to(description.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(game.current, 1, { opacity: 0, y: +20, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(close.current, 1, { opacity: 0, y: +20, ease: 'power4.out' })
  }

  const handleClick = () => {
    console.log(toggle)
    toggle ? fadeOut(description, game, nav, close)  : fadeIn(description, game, nav, close)
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
          {!matches && 
          <MoreInfos className="animationOnHomepage" onClick={handleClick}>
            Let's play !
          </MoreInfos>
          }
        </Description>
        <Close ref={close} onClick={handleClick}>
        <FontAwesomeIcon className="social-icon" icon={faArrowLeft} />
        </Close>
      </MainSection>
    </>
  )
}

export default Homepage
