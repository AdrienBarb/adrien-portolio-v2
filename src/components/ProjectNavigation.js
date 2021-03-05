import React from 'react'
import {
  StyledProjectNavigationWrapper,
  StyledProjectNavigation,
  StyledProjectNavigationContainer,
} from '../styles/projectNavigationStyles'

const ProjectNavigation = ({ prev, next }) => {
  return (
    <StyledProjectNavigationWrapper>
      <StyledProjectNavigationContainer>
        <StyledProjectNavigation left>
          <h1>{prev && prev.title}</h1>
          <a href={`/${prev?.slug}`}>{prev && 'Précedent'}</a>
        </StyledProjectNavigation>

        <StyledProjectNavigation>
          <h1>{next && next?.title}</h1>
          <a href={`/${next?.slug}`}>{next && 'Suivant'}</a>
        </StyledProjectNavigation>
      </StyledProjectNavigationContainer>
    </StyledProjectNavigationWrapper>
  )
}

export default ProjectNavigation
