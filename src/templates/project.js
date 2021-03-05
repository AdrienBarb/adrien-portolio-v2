import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ProjectNavigation from '../components/ProjectNavigation'
import {
  StyledProject,
  StyledProjectWrapper,
  StyledProjectDescription,
  StyledProjectNavigationWrapper,
  StyledProjectNavigation,
} from '../styles/projectStyles'

const Project = ({ pageContext }) => {
  const { article, prev, next } = pageContext

  console.log(prev, next)

  return (
    <Layout>
      <Navbar />

      <StyledProjectWrapper>
        <StyledProject>
          <StyledProjectDescription>
            <h1>{article.title}</h1>
            <p>{article.description?.description}</p>
            <a href={article.website} target="_blank">Visiter le site</a>
          </StyledProjectDescription>
          {article.projectVideo && (
            <video autoPlay loop src={article.projectVideo.file.url} />
          )}
        </StyledProject>
      </StyledProjectWrapper>
      <ProjectNavigation prev={prev} next={next}/>
    </Layout>
  )
}

export default Project
