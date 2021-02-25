import React, { useRef, useState } from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import Contact from './Contact'
import { useIntersection } from "react-use";
import gsap from "gsap";
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'
import { MainSection, NavbarWrapper, Description, MoreInfos, Letter, ContactWrapperStyle } from '../styles/homePageStyles'

const Homepage = () => {
    const [change, setChange] = useState(false)
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
      gsap.to(description.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(knowMore.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 1, y: -20, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
    }
  
    const fadeOut = (description, contact, nav) => {
      gsap.to(description.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(knowMore.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
    }

    intersection && intersection.intersectionRatio < 1
        ? fadeOut(description, contact, nav, knowMore)
        : fadeIn(description, contact, nav, knowMore)
  
    return (
      <Layout>
        <NavbarWrapper ref={nav}>
          <Navbar />
        </NavbarWrapper>
        <MainSection>
          <Description ref={description} >
            <h1  >
              
              Dével<Letter change={change}>o</Letter>ppeur web freelance
              {/* <Dot   
                onClick={toggleTheme}        
                transition={{
                  delay: 3,
                  duration: 0.6,
                  yoyo: Infinity,
                  ease: "easeOut",
                  repeatDelay: 3
                  }}
                animate={{ 
                  scale: [1, 2, 1]
                }} 
              /> */}
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Description>
          <MoreInfos ref={knowMore}>(en savoir plus)</MoreInfos>
        </MainSection>
        <div ref={sectionRef} >
            <ContactWrapperStyle ref={contact} >
                <Contact title={'EMAIL'} info={'adrien-barbier@hotmail.fr'}/>
                <Contact title={'TÉLÉPHONE'} info={'+33 6 79 09 38 18'}/>
                <Contact title={'SOCIAL'} info={'Linkedin'}/>
            </ContactWrapperStyle>
        </div>
      </Layout>
    )
}

export default Homepage
