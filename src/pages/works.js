import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { StyledWorksWrapper, StyledWork } from '../styles/worksPageStyles'

const works = () => {
  const test = ['Portfolio', 'Politique', 'E-commerce', 'Alumni', 'Labotech']

  return (
    <Layout>
      <Navbar />
      <StyledWorksWrapper>
        {test.map((el, index) => {
          return (
            <StyledWork>
              <p>
                <span>0{index}_</span>
                {el}
              </p>
            </StyledWork>
          )
        })}
      </StyledWorksWrapper>
    </Layout>
  )
}

export default works
