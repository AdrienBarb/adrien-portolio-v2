import React from 'react'
import {
  StyledProjectImage,
  StyledWorkSection,
} from '../../styles/workSectionStyles'
import Img from 'gatsby-image'

const WorkSection = ({ data }) => {
  console.log(data.projectImage?.fluid?.src)
  return (
    <StyledWorkSection>
      <div className="project-image-wrapper">
        <StyledProjectImage img={data.projectImage?.fluid?.src} />
      </div>
    </StyledWorkSection>
  )
}

export default WorkSection
