import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { StyledWorksWrapper, StyledWork } from '../styles/worksPageStyles'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { onNavigationEnter } from '../animations/onNavigation'
import { handleNavigationLeave } from '../animations/onNavigation'

const Works = () => {
  const test = ['Portfolio', 'Politique', 'E-commerce', 'Alumni', 'Labotech']
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  useEffect(() => {
    onNavigationEnter()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Réalisations</title>
      </Helmet>
      <Navbar />
      <StyledWorksWrapper className="animationOnNavigation">
        {data.allContentfulProject.edges.map(({ node }, index) => {
          return (
            <div onClick={() => handleNavigationLeave(`/${node.slug}`)}>
              <StyledWork>
                <p>
                  <span>0{index}_</span>
                  {node.title}
                </p>
              </StyledWork>
            </div>
          )
        })}
      </StyledWorksWrapper>
    </>
  )
}

export default Works
