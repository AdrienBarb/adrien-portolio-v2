import React from 'react'
import returnIcon from '../images/return.svg'
import leftIcon from '../images/left.svg'
import rightIcon from '../images/right.svg'
import { StyledGame } from '../styles/gameStyles'

const Game = ({ game, konamiCode }) => {
  return (
    <StyledGame ref={game}>
      {konamiCode ? (
        <>
          <img src={returnIcon} alt="hello" />
          <p>POUR RE-COMMENCER</p>
        </>
      ) : (
        <>
          <img src={leftIcon} alt="hello" />
          <img src={leftIcon} alt="hello" />
          <img src={rightIcon} alt="hello" />
          <img src={rightIcon} alt="hello" />
          <img src={returnIcon} alt="hello" />
        </>
      )}
    </StyledGame>
  )
}

export default Game
