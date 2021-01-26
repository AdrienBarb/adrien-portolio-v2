import React, { useRef } from 'react'
import classes from './pages/index.module.scss'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import { useIntersection } from "react-use";
import gsap from "gsap";

const App = () => {
    const sectionRef = useRef(null);
    const fadeInEl = useRef(null);

    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    });
  
    const fadeIn = element => {
        console.log('fadeIn')
      gsap.to(element.current, 1, {
        opacity: 1, 
        y: -60,
        ease: "power4.out",
        stagger: {
          amout: 0.3
        }
      })
    }
  
    const fadeOut = element => {
      gsap.to(element.current, 1, {
        opacity: 0, 
        y: -20,
        ease: "power4.out",
      })
    }

    intersection && intersection.intersectionRatio < 1
        ? fadeOut(fadeInEl)
        : fadeIn(fadeInEl)
  
    return (
      <>
        <Navbar />
        <Layout>
          <div className={classes.nameWrapper}>
            <div className={classes.name}>ADRIEN BARBIER</div>
            <div className={classes.workTitle}>Développeur web freelance</div>
          </div>
          <div ref={fadeInEl} className='fadeIn' className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div  className={classes.moreInfos}>(en savoir plus)</div>
        </Layout>
        <div ref={sectionRef} >
            <div ref={fadeInEl} className={classes.contactContainer}>
                <Contact  title={'EMAIL'} info={'adrien-barbier@hotmail.fr'}/>
                <Contact  title={'TÉLÉPHONE'} info={'+33 6 79 09 38 18'}/>
                <Contact  title={'SOCIAL'} info={'Linkedin'}/>
            </div>
        </div>
      </>
    )
}

export default App
