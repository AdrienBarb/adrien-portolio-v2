import React from 'react'
import classes from './Contact.module.css'

const Contact = (props) => {
    return (
        <div className={classes.contact}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.info}>{props.info}</div>
        </div>
    )
}

export default Contact
