import React from 'react'
import { NavbarWrapper, NavbarStyle, Navlink } from '../../styles/navbarStyles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fullnav from '../Fullnav'

const Navbar = () => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <NavbarWrapper>
      <NavbarStyle >
        <Link className="navLink" to={'/'}>
          ADRIEN BARBIER
        </Link>
        {matches ? (
          <Navlink>
            <Link
              className="navLink"
              to={'/services'}
            >
              SERVICES
            </Link>
            <Link
              className="navLink"
              to={'/works'}
            >
              WORKS
            </Link>
          </Navlink>
        ) : (
          <Fullnav />
        )}
      </NavbarStyle>
    </NavbarWrapper>
  )
}

export default Navbar
