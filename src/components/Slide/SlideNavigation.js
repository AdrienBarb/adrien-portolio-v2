import React from 'react'
import { StyledSlideNavigation } from '../../styles/slideNavigationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SlideNavigation = ({ transformation, setTransformation }) => {
  console.log(transformation)

  const handleNavigation = (dir) => {
    if (dir === 'right') {
      setTransformation(transformation + 100)
    } else if (dir === 'left') {
      setTransformation(transformation - 100)
    }
  }

  return (
    <StyledSlideNavigation>
      {transformation !== 0 && (
        <div className="icon left" onClick={() => handleNavigation('left')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}
      {transformation !== 200 && (
        <div className="icon right" onClick={() => handleNavigation('right')}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
    </StyledSlideNavigation>
  )
}

export default SlideNavigation
