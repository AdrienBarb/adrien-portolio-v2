import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {
  StyledProject,
  StyledProjectWrapper,
  StyledProjectDescription,
  StyledProjectNavigationWrapper,
  StyledProjectNavigation,
} from '../styles/projectStyles'

const project = ({ pageContext }) => {
  const { article } = pageContext
  console.log(article)

  return (
    <Layout>
      <Navbar />

      <StyledProjectWrapper>
        <StyledProject>
          <StyledProjectDescription>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <a href={article.lien}>Visiter le site</a>
          </StyledProjectDescription>
          <video autoPlay loop src={article.projectVideo.file.url} />
        </StyledProject>
      </StyledProjectWrapper>
      <StyledProjectNavigationWrapper>
        <StyledProjectNavigation>
            <h1>Précedent</h1>
            <a href="">Titre</a>
        </StyledProjectNavigation>

        <StyledProjectNavigation>
            <h1>Suivant</h1>
            <a href="">Titre</a>
        </StyledProjectNavigation>
      </StyledProjectNavigationWrapper>
    </Layout>
  )
}

export default project
