import React from 'react'
import deleteIcon from '../images/delete.svg'
import leftIcon from '../images/left.svg'
import rightIcon from '../images/right.svg'
import { StyledGame } from '../styles/gameStyles'

const Game = () => {
  return (
    <StyledGame>
        
    
        <img src={leftIcon} alt="hello" />
        <img src={leftIcon} alt="hello" />
        <img src={rightIcon} alt="hello" />
        <img src={rightIcon} alt="hello" />
        <img src={deleteIcon} alt="hello" />
   
    </StyledGame>
  )
}

export default Game
