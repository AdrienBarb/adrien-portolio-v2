import React from 'react'
import { StyledServices } from '../../styles/servicesStyles'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <StyledServices>
      <ServiceCard
        title="Conseil"
        description="La première étape d’un projet digital est de définir une stratégie : A qui s’adresse votre projet ?  Comment toucher les bonnes personnes ? Grâce à mon expertise, je vous accompagne et vous aide à vous poser les bonnes questions. Le but ? Créer une image de marque percutante pour attirer toujours plus de clients."
      />
      <ServiceCard
        title="Conception"
        description="La conception d’un produit est une étape primordiale. Elle permet de poser des bases solides, et d’anticiper au maximum les possibles futurs aléas du projet. C’est à cette étape qu’il faut se poser un maximum de questions afin de pouvoir cibler l’utilisateur, et développer une application ergonomique, intuitive, sur laquelle il pourra trouver rapidement l’information qu’il cherche."
      />
      <ServiceCard
        title="Design"
        description="Le design est la première interaction avec l’utilisateur, il doit donc être adapté et soigné pour que l’expérience utilisateur soit la meilleure possible. C’est aussi ce qui va vous différencier de vos concurrents, c’est en quelque sorte votre image de marque."
      />
      <ServiceCard
        title="Development"
        description="C’est à cette étape que le projet prend forme. Je m’adapte le plus possible à vos besoins en utilisant les technologies qui correspondent le mieux à vos projets. Le but étant de développer une application web ou un site internet facile d’utilisation pour vos utilisateurs comme pour vous !"
      />
    </StyledServices>
  )
}

export default Services
