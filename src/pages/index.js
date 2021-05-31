import React, { useState } from 'react'
import Homepage from '../components/Homepage/Homepage'
import { Helmet } from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import Slide from '../components/Slide/Slide'
// @ts-ignore
import website from '../images/website.svg'
// @ts-ignore
import webApp from '../images/web-app.svg'
// @ts-ignore
import mvp from '../images/mvp.svg'
import { IndexStyled } from '../styles/indexStyles'
import SlideNavigation from '../components/Slide/SlideNavigation'
import Services from '../components/Services/Services'
import Navbar from '../components/Layout/Navbar'

const Index = () => {
  const anchors = ['Accueil', 'Mon offre', 'Services']
  const [transformation, setTransformation] = useState(0)

  console.log(transformation)

  return (
    <IndexStyled transformation={transformation}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Home</title>
      </Helmet>
      <ReactFullpage
        navigation
        navigationTooltips={anchors}
        scrollOverflow={true}
        sectionsColor={['#F2ECDE', '#1E5871', '#F2ECDE']}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Navbar />
                <Homepage />
              </div>
              <div className="section slide-section">
                <div className="slide">
                  <Slide
                    title="Site Internet"
                    description="Avoir une presence en ligne en 2021 est un incontournable pour une entreprise/une marque. Que ce soit pour présentez les service de votre entreprise, ou le menu de votre restaurant."
                    imgPath={website}
                  />
                </div>
                <div className="slide">
                  <Slide
                    title="Application web"
                    description="Avoir une presence en ligne en 2021 est un incontournable pour une entreprise/une marque. Que ce soit pour présentez les service de votre entreprise, ou le menu de votre restaurant."
                    imgPath={webApp}
                  />
                </div>
                <div className="slide">
                  <Slide
                    title="MVP"
                    description="Faire développer un MVP (Produit Minimum Viable en français) vous permettra de confronter votre produit à vos clients le plus rapidement possible. Le but ? Récolter des avis sur les différentes fonctionnalités pour améliorer votre produits. Beaucoup d’entrepreneurs passe par la case MVP avant de développer la version Bêta de leur application."
                    imgPath={mvp}
                  />
                </div>
                <SlideNavigation
                  transformation={transformation}
                  setTransformation={setTransformation}
                />
              </div>
              <div className="section">
                <Services />
              </div>
            </div>
          )
        }}
      />
    </IndexStyled>
  )
}

export default Index
