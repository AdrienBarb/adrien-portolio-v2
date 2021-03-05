import React, { useState } from 'react'
import {
  StyledProjectNavigationWrapper,
  StyledProjectNavigation,
} from '../styles/projectStyles'
import { useGlobalStateContext } from '../context/globalContext'

const ProjectNavigation = ({ prev, next }) => {
  const { dataTest } = useGlobalStateContext()

  return (
    <StyledProjectNavigationWrapper>
      <StyledProjectNavigation>
        <h1>{prev && 'Précedent'}</h1>
        <a href={`/${prev?.slug}`}>{prev && 'Titre'}</a>
      </StyledProjectNavigation>

      <StyledProjectNavigation>
      <h1>{next && 'Suivant'}</h1>
        <a href={`/${next?.slug}`}>{next && 'Titre'}</a>
      </StyledProjectNavigation>
    </StyledProjectNavigationWrapper>
  )
}

export default ProjectNavigation
