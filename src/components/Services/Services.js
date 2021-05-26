import React from 'react'
import { StyledServices } from '../../styles/servicesStyles'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <StyledServices>
      <ServiceCard
        title="Conseil"
        description="This is where the project takes shape. I adapt as much as possible to your needs by using the technologies that best suit your projects. The goal is to develop an easy-to-use web application or website for your users as well as for you!"
      />
      <ServiceCard
        title="Conception"
        description="The design of a product is an essential step. It makes it possible to lay solid foundations, and to anticipate as much as possible the possible future hazards of the project. It is at this stage that you have to ask yourself as many questions as possible in order to be able to target the user, and to develop an ergonomic, intuitive application on which he can quickly find the information he is looking for."
      />
      <ServiceCard
        title="Design"
        description="Design is the first interaction with the user, so it must be adapted and neat for the user experience to be the best possible. This is also what will differentiate you from your competitors, it is in a way your brand image."
      />
      <ServiceCard
        title="Development"
        description="This is where the project takes shape. I adapt as much as possible to your needs by using the technologies that best suit your projects. The goal is to develop an easy-to-use web application or website for your users as well as for you!"
      />
    </StyledServices>
  )
}

export default Services
