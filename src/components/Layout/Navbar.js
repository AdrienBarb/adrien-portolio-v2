import React from 'react'
import { NavbarWrapper } from '../../styles/navbarStyles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fullnav from '../Fullnav'

const Navbar = () => {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <NavbarWrapper>
      <div className="navbar" >
        <Link className="home-link" to={'/'}>
          ADRIEN BARBIER
        </Link>
        {matches ? (
          <div className="nav-links">
            <Link
              className="nav-link"
              to={'/about-me'}
            >
              A PROPOS DE MOI
            </Link>
            <Link
              className="nav-link"
              to={'/works'}
            >
              MES RÉALISATIONS
            </Link>
            <Link
              className="nav-link"
              to={'/contact'}
            >
              ME CONTACTER
            </Link>
          </div>
        ) : (
          <Fullnav />
        )}
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
