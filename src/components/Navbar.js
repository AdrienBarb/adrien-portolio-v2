import React from 'react'
import { NavbarWrapper, NavbarStyle, Navlink } from '../styles/navbarStyles'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarStyle>
        <Navlink>
          <Link to="/services">SERVICE</Link>
        </Navlink>
        <Navlink>
          <Link to="/works">RÉALISATION</Link>
        </Navlink>
      </NavbarStyle>
    </NavbarWrapper>
  )
}

export default Navbar
