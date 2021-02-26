import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'
import { StyledServicesWrapper } from '../styles/servicesPageStyles'

const services = () => {
  return (
    <Layout>
      <Navbar />
      <StyledServicesWrapper>
        <ServiceCard
          title="Conseil"
          description="La conception d’un produit est une étape primordiale. Elle permet de poser des bases solides, et d’anticiper au maximum les possibles futurs aléas du projet. C’est à cette étape qu’il faut se poser un maximum de questions afin de pouvoir cibler l’utilisateur, et développer une application ergonomique, intuitive, sur laquelle il pourra trouver rapidement l’information qu’il cherche."
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
          title="Développement"
          description="C’est à cette étape que le projet prend forme. Je m’adapte le plus possible à vos besoins en utilisant les technologies qui correspondent le mieux à vos projets. Le but étant de développer une application web ou un site internet facile d’utilisation pour vos utilisateurs comme pour vous !"
        />
      </StyledServicesWrapper>
    </Layout>
  )
}

export default services
