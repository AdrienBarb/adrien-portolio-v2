import React from 'react'
import {
  StyledProjectImage,
  StyledWorkSection,
  StyledProjectInfo,
} from '../../styles/workSectionStyles'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from '@material-ui/core'

const WorkSection = ({ data }) => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <StyledWorkSection>
      <motion.div className="project-image-wrapper" whileHover={{ opacity: 1 }}>
        <StyledProjectInfo whileHover={{ opacity: 1 }} matches={matches}>
          <h1>{data.title}</h1>
          <div className="website-link">
            <a href={data.website} target="_blank" rel="noreferrer"></a>
            VOIR LE SITE
          </div>
        </StyledProjectInfo>
        <StyledProjectImage img={data.projectImage?.fluid?.src} />
      </motion.div>
    </StyledWorkSection>
  )
}

export default WorkSection
