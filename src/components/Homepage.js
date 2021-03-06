import React, { useRef, useState, useEffect } from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import Contact from './Contact'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext'
import {
  MainSection,
  Description,
  MoreInfos,
  Letter,
} from '../styles/homePageStyles'
import IntroOverlay from './IntroOverlay'
import useKonamiCode from './Konami'

const Homepage = () => {
  const [change, setChange] = useState(false)
  const sectionRef = useRef(null)
  const description = useRef(null)
  const contact = useRef(null)
  const nav = useRef(null)
  const knowMore = useRef(null)
  const overlay = useRef(null)
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const [konamiCode] = useKonamiCode()

  console.log(konamiCode)

  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    const t1 = gsap.timeline()

    t1.to('.overlay', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    }).to(overlay.current, 0, {
      css: {
        display: 'none',
      },
    })
  }, [])


  useEffect(() => {
    if(konamiCode) {
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
    <Layout>
      <IntroOverlay overlay={overlay} />

      <Navbar nav={nav} />

      <MainSection>
        <Description ref={description}>
          <h1>
            Dével<Letter change={change}>o</Letter>ppeur web freelance
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Description>
        <MoreInfos ref={knowMore}>(scrollez vers le bas)</MoreInfos>
      </MainSection>
      <div ref={sectionRef}>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
