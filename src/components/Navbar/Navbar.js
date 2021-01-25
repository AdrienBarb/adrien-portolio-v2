import React from 'react'
import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <div className={classes.navLink}>SERVICE</div>
                <div className={classes.navLink}>RÉALISATION</div>
            </div>
        </div>
    )
}

export default Navbar
