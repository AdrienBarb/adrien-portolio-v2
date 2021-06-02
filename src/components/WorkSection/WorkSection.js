import React from 'react'
import {
  StyledProjectImage,
  StyledWorkSection,
} from '../../styles/workSectionStyles'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from '@material-ui/core'

const WorkSection = ({ data }) => {
  const matches = useMediaQuery('(min-width:768px)')
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

  const animationSequence = () => {
    controls.start(animation.title)
    controlsButton.start(animation.button)
  }

  const initialSequence = () => {
    controls.start(initial.title)
    controlsButton.start(initial.button)
  }

  return (
    <StyledWorkSection>
      <motion.div
        className="project-image-wrapper"
        onHoverStart={() => animationSequence()}
        onHoverEnd={() => initialSequence()}
      >
        <div className="hover-info">
          <motion.h1 animate={matches && controls}>{data.title}</motion.h1>
          <motion.div animate={matches && controlsButton} className="website-link">
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
