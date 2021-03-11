import React from 'react'
import { NavbarWrapper, NavbarStyle, Navlink } from '../styles/navbarStyles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fullnav from './Fullnav'
import { handleNavigationLeave } from '../animations/onNavigation'

const Navbar = ({ nav }) => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <NavbarWrapper ref={nav} className="animationOnNavigation">
      <NavbarStyle>
        <div className="navLink" onClick={() => handleNavigationLeave('/')}>
          ADRIEN BARBIER
        </div>
        {matches ? (
          <Navlink>
            <div
              className="navLink"
              onClick={() => handleNavigationLeave('/services')}
            >
              SERVICES
            </div>
            <div
              className="navLink"
              onClick={() => handleNavigationLeave('/works')}
            >
              RÉALISATIONS
            </div>
          </Navlink>
        ) : (
          <Fullnav />
        )}
      </NavbarStyle>
    </NavbarWrapper>
  )
}

export default Navbar
