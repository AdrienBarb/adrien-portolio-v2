import React, { useRef } from 'react'
import classes from './Homepage.module.scss'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import { useIntersection } from "react-use";
import gsap from "gsap";
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { MainSection, NavbarWrapper, Description, MoreInfos } from '../../styles/homePageStyles'

const Homepage = () => {
    const sectionRef = useRef(null);
    const description = useRef(null);
    const contact = useRef(null);
    const nav = useRef(null);
    const knowMore = useRef(null)
    const dispatch = useGlobalDispatchContext()
    const { currentTheme } = useGlobalStateContext()

    const toggleTheme = () => {
      if (currentTheme === 'dark') {
        dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      } else {
        dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
      }
    }

    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    });
  
    const fadeIn = (description, contact, nav) => {
      gsap.to(description.current, 1, { opacity: 0, y: 0, ease: "power4.out", })
      gsap.to(knowMore.current, 1, { opacity: 0, y: 0, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
    }
  
    const fadeOut = (description, contact, nav) => {
      gsap.to(description.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(knowMore.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
    }

    intersection && intersection.intersectionRatio < 1
        ? fadeOut(description, contact, nav)
        : fadeIn(description, contact, nav)
  
    return (
      <Layout>
        <NavbarWrapper ref={nav}>
          <Navbar />
        </NavbarWrapper>
        <MainSection>
          <Description ref={description} >
            <h1 className={classes.workTitle} onClick={toggleTheme}>Développeur web freelance</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Description>
          <MoreInfos ref={knowMore}>(en savoir plus)</MoreInfos>
        </MainSection>
        <div ref={sectionRef} >
            <div ref={contact} className={classes.contactContainer}>
                <Contact  title={'EMAIL'} info={'adrien-barbier@hotmail.fr'}/>
                <Contact  title={'TÉLÉPHONE'} info={'+33 6 79 09 38 18'}/>
                <Contact  title={'SOCIAL'} info={'Linkedin'}/>
            </div>
        </div>
      </Layout>
    )
}

export default Homepage
