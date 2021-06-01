import React from 'react'
import {
  StyledProjectImage,
  StyledWorkSection,
} from '../../styles/workSectionStyles'
import { motion, useAnimation } from 'framer-motion'

const WorkSection = ({ data, index }) => {
  console.log(data)
  const controls = useAnimation()
  const controlsButton = useAnimation()
  const animation = {
    title: {
      y: +160,
    },
    button: {
      y: -120,
    },
  }

  const initial = {
    title: {
      y: 0,
    },
    button: {
      y: 0,
    },
  }

  console.log(index % 2 == 0)

  const animationSequence = () => {
    controls.start(animation.title)
    controlsButton.start(animation.button)
  }

  const initialSequence = () => {
    controls.start(initial.title)
    controlsButton.start(initial.button)
  }

  return (
    <StyledWorkSection isTrue={index % 2 == 0}>
      <motion.div
        className="project-image-wrapper"
        onHoverStart={() => animationSequence()}
        onHoverEnd={() => initialSequence()}
      >
        <div className="hover-info">
          <motion.h1 animate={controls}>{data.title}</motion.h1>
          <motion.div animate={controlsButton} className="website-link">
            <a href={data.website} target="_blank" rel="noreferrer"></a>
            VOIR LE SITE
          </motion.div>
        </div>
        <StyledProjectImage img={data.projectImage?.fluid?.src} />
      </motion.div>
    </StyledWorkSection>
  )
}

export default WorkSection
