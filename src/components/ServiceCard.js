import React from 'react'
import { ServiceCardWrapper } from '../styles/serviceCardStyles'

const ServiceCard = ({ title, description }) => {
  return (
    <ServiceCardWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </ServiceCardWrapper>
  )
}

export default ServiceCard
