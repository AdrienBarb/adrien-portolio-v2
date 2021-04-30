import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { StyledWorksWrapper, StyledWork } from '../styles/worksPageStyles'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { onNavigationEnter } from '../animations/onNavigation'

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        edges {
          node {
            title
            slug
            website
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
            <a href={node.website} target="_blank" rel="noreferrer" key={index}>
              <StyledWork>
                <p>
                  <span>0{index}_</span>
                  {node.title}
                </p>
              </StyledWork>
            </a>
          )
        })}
      </StyledWorksWrapper>
    </>
  )
}

export default Works
