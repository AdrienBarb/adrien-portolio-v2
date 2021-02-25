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
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </StyledServicesWrapper>

        </Layout>
    )
}

export default services