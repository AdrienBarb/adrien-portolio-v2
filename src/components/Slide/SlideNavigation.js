import React from 'react'
import { StyledSlideNavigation } from '../../styles/slideNavigationStyles'

const SlideNavigation = ({ transformation, setTransformation }) => {
  return (
    <StyledSlideNavigation>
      <ul>
        <li onClick={() => setTransformation(0)}> <span className={`dot ${transformation === 0 ? 'active' : ''}`}></span></li>
        <li onClick={() => setTransformation(100)}> <span className={`dot ${transformation === 100 ? 'active' : ''}`}></span></li>
        <li onClick={() => setTransformation(200)}> <span className={`dot ${transformation === 200 ? 'active' : ''}`}></span></li>
      </ul>
    </StyledSlideNavigation>
  )
}

export default SlideNavigation
