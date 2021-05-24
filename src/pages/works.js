import React, { useEffect } from 'react'
import { StyledWorksWrapper, StyledWork } from '../styles/worksPageStyles'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Réalisations</title>
      </Helmet>

      <StyledWorksWrapper>
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
