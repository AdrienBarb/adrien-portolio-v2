import React, { useRef } from 'react'
import classes from './Homepage.module.scss'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import { useIntersection } from "react-use";
import gsap from "gsap";

const Homepage = () => {
    const sectionRef = useRef(null);
    const description = useRef(null);
    const contact = useRef(null);
    const nav = useRef(null);


    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    });
  
    const fadeIn = (description, contact, nav) => {
      gsap.to(description.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 1, y: 0, ease: "power4.out", })
    }
  
    const fadeOut = (description, contact, nav) => {
      gsap.to(description.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(contact.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
      gsap.to(nav.current, 1, { opacity: 0, y: -20, ease: "power4.out", })
    }

    intersection && intersection.intersectionRatio < 1
        ? fadeOut(description, contact, nav)
        : fadeIn(description, contact, nav)
  
    return (
      <>
        <div ref={nav} className={classes.navbar}>
          <Navbar />
        </div>
        <Layout>
          <div ref={description} className='fadeIn' className={classes.description}>
            <div className={classes.workTitle}>Développeur web freelance</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className={classes.moreInfos}>(en savoir plus)</div>
        </Layout>
        <div ref={sectionRef} >
            <div ref={contact} className={classes.contactContainer}>
                <Contact  title={'EMAIL'} info={'adrien-barbier@hotmail.fr'}/>
                <Contact  title={'TÉLÉPHONE'} info={'+33 6 79 09 38 18'}/>
                <Contact  title={'SOCIAL'} info={'Linkedin'}/>
            </div>
        </div>
      </>
    )
}

export default Homepage
