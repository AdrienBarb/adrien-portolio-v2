import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ProjectNavigation from '../components/ProjectNavigation'
import {
  StyledProject,
  StyledProjectWrapper,
  StyledProjectDescription,
  StyledVideoWrapper,
} from '../styles/projectStyles'
import Img from 'gatsby-image'

const Project = ({ pageContext }) => {
  const { article, prev, next } = pageContext

  console.log(article)

  return (
    <Layout>
      <Navbar />

      <StyledProjectWrapper>
        <StyledProject>
          <StyledVideoWrapper>
            <img src={article.projectVideo.fluid.src} />
          </StyledVideoWrapper>
          <StyledProjectDescription>
            <h1>{article.title}</h1>
            <p>{article.description?.description}</p>
            {article.website && (
              <a href={article.website} target="_blank">
                Visiter le site
              </a>
            )}
          </StyledProjectDescription>
        </StyledProject>
      </StyledProjectWrapper>
      <ProjectNavigation prev={prev} next={next} />
    </Layout>
  )
}

export default Project
