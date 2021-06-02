import React, { useEffect } from 'react'
import { StyledWorksWrapper, StyledWork } from '../styles/worksPageStyles'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Layout/Navbar'
import WorkSection from '../components/WorkSection/WorkSection'

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        edges {
          node {
            title
            slug
            website
            projectImage {
              fluid(maxWidth: 980) {
                ...GatsbyContentfulFluid
              }
            }
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
      <Navbar />

      <StyledWorksWrapper>
        {data.allContentfulProject.edges.map(({ node }) => {
          return <WorkSection data={node} />
        })}
      </StyledWorksWrapper>
    </>
  )
}

export default Works
