import React from 'react'
import {
  NavbarWrapper,
  NavbarStyle,
  Navlink,
} from '../styles/navbarStyles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fullnav from './Fullnav'

const Navbar = ({nav}) => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <NavbarWrapper ref={nav}>
      <NavbarStyle>
        <Link to="/">ADRIEN BARBIER</Link>
        {matches ? (
          <Navlink>
            <Link to="/services">SERVICES</Link>
            <Link to="/works">RÉALISATIONS</Link>
          </Navlink>
        ) : (
          <Fullnav />
        )}
      </NavbarStyle>
    </NavbarWrapper>
  )
}

export default Navbar
