import React from 'react'
import { StyledServiceCard } from '../../styles/serviceCardStyles'

const ServiceCard = ({ title, description }) => {
  return (
    <StyledServiceCard>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledServiceCard>
  )
}

export default ServiceCard
