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
              </NavProjectIconWrapper>
            )}
          </Link>
        </StyledProjectNavigation>

        <StyledProjectNavigation>
          <Link to={`/${next?.slug}`}>
            {matches ? (
              <>
                <p>{next && 'Suivant'}</p>
              </>
            ) : (
              <NavProjectIconWrapper next>
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
