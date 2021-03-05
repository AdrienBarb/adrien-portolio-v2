import React from 'react'
import {
  StyledProjectNavigationWrapper,
  StyledProjectNavigation,
  StyledProjectNavigationContainer,
  NavProjectIconWrapper,
} from '../styles/projectNavigationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ProjectNavigation = ({ prev, next }) => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <StyledProjectNavigationWrapper>
      <StyledProjectNavigationContainer>
        <StyledProjectNavigation left>
          {matches ? (
            <>
              <h1>{prev && prev.title}</h1>
              <a href={`/${prev?.slug}`}>{prev && 'Précedent'}</a>
            </>
          ) : (
            <NavProjectIconWrapper prev>
              {prev && (
                <a href={`/${prev?.slug}`}><FontAwesomeIcon className="social-icon" icon={faChevronLeft} /></a>
              )}
              <h1>{prev && prev.title}</h1>
            </NavProjectIconWrapper>
          )}
        </StyledProjectNavigation>

        <StyledProjectNavigation>
          {matches ? (
            <>
              <h1>{next && next?.title}</h1>
              <a href={`/${next?.slug}`}>{next && 'Suivant'}</a>
            </>
          ) : (
            <NavProjectIconWrapper next>
              <h1>{next && next?.title}</h1>
              {next && (
                <a href={`/${next?.slug}`}><FontAwesomeIcon className="social-icon" icon={faChevronRight} /></a>
              )}
            </NavProjectIconWrapper>
          )}
        </StyledProjectNavigation>
      </StyledProjectNavigationContainer>
    </StyledProjectNavigationWrapper>
  )
}

export default ProjectNavigation
