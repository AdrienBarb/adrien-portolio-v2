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
          <Link to={`/${prev?.slug}`}>
            {matches ? (
              <>
                <h1>{prev && prev.title}</h1>
                <p>{prev && 'Précedent'}</p>
              </>
            ) : (
              <NavProjectIconWrapper prev>
                {prev && (
                  <FontAwesomeIcon
                    className="social-icon"
                    icon={faChevronLeft}
                  />
                )}
                <h1>{prev && prev.title}</h1>
              </NavProjectIconWrapper>
            )}
          </Link>
        </StyledProjectNavigation>

        <StyledProjectNavigation>
          <Link to={`/${next?.slug}`}>
            {matches ? (
              <>
                <h1>{next && next?.title}</h1>
                <p>{next && 'Suivant'}</p>
              </>
            ) : (
              <NavProjectIconWrapper next>
                <h1>{next && next?.title}</h1>
                {next && (
                  <FontAwesomeIcon
                    className="social-icon"
                    icon={faChevronRight}
                  />
                )}
              </NavProjectIconWrapper>
            )}
          </Link>
        </StyledProjectNavigation>
      </StyledProjectNavigationContainer>
    </StyledProjectNavigationWrapper>
  )
}

export default ProjectNavigation
