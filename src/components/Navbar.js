import React from 'react'
import { NavbarWrapper, NavbarStyle, Navlink } from '../styles/navbarStyles'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarStyle>
                <Navlink>SERVICE</Navlink>
                <Navlink>RÉALISATION</Navlink>
            </NavbarStyle>
        </NavbarWrapper>
    )
}

export default Navbar
