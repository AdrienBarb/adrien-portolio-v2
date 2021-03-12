import React, { useRef, useEffect } from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext'
import { MainSection, Description, MoreInfos } from '../styles/homePageStyles'
import useKonamiCode from './Konami'
import Game from './Game'
import { onNavigationEnter } from '../animations/onNavigation'

const Homepage = () => {
  const sectionRef = useRef(null)
  const description = useRef(null)
  const contact = useRef(null)
  const nav = useRef(null)
  const knowMore = useRef(null)
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const [konamiCode] = useKonamiCode()

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

  useEffect(() => {
    if (konamiCode) {
      if (currentTheme === 'dark') {
        dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      } else {
        dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
      }
    }
  }, [konamiCode])

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  const fadeIn = (description, contact, nav) => {
    gsap.to(description.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(knowMore.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(contact.current, 1, { opacity: 1, y: -20, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
  }

  const fadeOut = (description, contact, nav) => {
    gsap.to(description.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(knowMore.current, 1, { opacity: 1, y: 0, ease: 'power4.out' })
    gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
    gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: 'power4.out' })
  }

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(description, contact, nav, knowMore)
    : fadeIn(description, contact, nav, knowMore)

  return (
    <>
      <Navbar nav={nav} />
      <MainSection>
        {/* <Game /> */}
        <Description className="animationOnHomepage" ref={description}>
          <h1>Développeur web freelance</h1>
          <p>
            Du conseil à la réalisation, j’ai pour passion de donner vie à vos
            idées: <strong>Site internet</strong>,{' '}
            <strong>application web</strong>, <strong>API</strong>. Ouvert à
            tout nouveau challenge, je suis à l’écoute pour discuter de la
            manière dont je peux être utile à votre projet !
          </p>
        </Description>
        <MoreInfos className="animationOnHomepage" ref={knowMore}>
          (scrollez vers le bas)
        </MoreInfos>
      </MainSection>
      <div ref={sectionRef}>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Homepage
