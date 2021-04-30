import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {
  StyledProject,
  StyledProjectWrapper,
  StyledProjectDescription,
  StyledVideoWrapper,
} from '../styles/projectStyles'
import { Helmet } from 'react-helmet'
import { onNavigationEnter } from '../animations/onNavigation'

const Project = ({ pageContext }) => {
  const { article } = pageContext

  useEffect(() => {
    onNavigationEnter()
  }, [])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | {article.title}</title>
      </Helmet>
      <Navbar />
      <StyledProjectWrapper className="animationOnNavigation">
        <StyledProject>
          <StyledVideoWrapper>
            <img src={article.projectVideo.fluid.src} alt="Adrien Project"/>
          </StyledVideoWrapper>
          <StyledProjectDescription>
            <h1>{article.title}</h1>
            <p>{article.description?.description}</p>
            {article.website && (
              <a href={article.website} target="_blank" rel="noreferrer">
                Visiter le site
              </a>
            )}
          </StyledProjectDescription>
        </StyledProject>
      </StyledProjectWrapper>
    </div>
  )
}

export default Project
