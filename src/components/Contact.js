import React from 'react'
import { StyledContact } from '../styles/contactStyles'

const Contact = (props) => {
    return (
        <StyledContact>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </StyledContact>
    )
}

export default Contact
