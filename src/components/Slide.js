import React from 'react'
import { StyledSlide } from '../styles/slideStyles'

const Slide = ({ title, description, imgPath }) => {
  return (
    <StyledSlide>
      <div className="description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgPath} alt="" />
    </StyledSlide>
  )
}

export default Slide
