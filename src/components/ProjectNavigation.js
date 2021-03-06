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
import { Link } from 'gatsby'

const ProjectNavigation = ({ prev, next }) => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <StyledProjectNavigationWrapper>
      <StyledProjectNavigationContainer>
        <StyledProjectNavigation left>
          {matches ? (
            <>
              <h1>{prev && prev.title}</h1>
              <Link to={`/${prev?.slug}`}>{prev && 'Précedent'}</Link>
            </>
          ) : (
            <NavProjectIconWrapper prev>
              {prev && (
                <Link to={`/${prev?.slug}`}><FontAwesomeIcon className="social-icon" icon={faChevronLeft} /></Link>
              )}
              <h1>{prev && prev.title}</h1>
            </NavProjectIconWrapper>
          )}
        </StyledProjectNavigation>

        <StyledProjectNavigation>
          {matches ? (
            <>
              <h1>{next && next?.title}</h1>
              <Link to={`/${next?.slug}`}>{next && 'Suivant'}</Link>
            </>
          ) : (
            <NavProjectIconWrapper next>
              <h1>{next && next?.title}</h1>
              {next && (
                <Link to={`/${next?.slug}`}><FontAwesomeIcon className="social-icon" icon={faChevronRight} /></Link>
              )}
            </NavProjectIconWrapper>
          )}
        </StyledProjectNavigation>
      </StyledProjectNavigationContainer>
    </StyledProjectNavigationWrapper>
  )
}

export default ProjectNavigation
