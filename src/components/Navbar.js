import React from 'react'
import {
  NavbarWrapper,
  NavbarStyle,
  Navlink,
} from '../styles/navbarStyles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fullnav from './Fullnav'

const Navbar = () => {
  const matches = useMediaQuery('(min-width:768px)')

  console.log(matches)
  return (
    <NavbarWrapper>
      <NavbarStyle>
        <Link to="/">ADRIEN BARBIER</Link>
        {matches ? (
          <Navlink>
            <Link to="/services">SERVICE</Link>
            <Link to="/works">RÉALISATION</Link>
          </Navlink>
        ) : (
          <Fullnav />
        )}
      </NavbarStyle>
    </NavbarWrapper>
  )
}

export default Navbar
