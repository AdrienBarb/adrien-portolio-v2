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
    <IndexStyled
      transformation={transformation}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
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
                    description="Avoir une présence en ligne en 2021 est devenu incontournable. Que ce soit pour présenter les services de votre entreprise, ou le menu de votre restaurant."
                    imgPath={website}
                  />
                </div>
                <div className="slide">
                  <Slide
                    title="Application Web"
                    description="Une application web est une application pouvant être supportée par n’importe quel navigateur, ce qui la rend facilement accessible depuis tout type de support (ordinateur, téléphone). Besoin de gérer des évènements? Des clients? Améliorer la production de votre atelier de fabrication? Une application web est une solution efficace !"
                    imgPath={webApp}
                  />
                </div>
                <div className="slide">
                  <Slide
                    title="MVP"
                    description="Faire développer un MVP (Produit Minimum Viable en français) vous permettra de confronter votre produit à vos clients le plus rapidement possible. Le but ? Récolter des avis sur les différentes fonctionnalités et améliorer votre produit. Beaucoup d’entrepreneurs passent par la case MVP avant de développer la version Bêta de leur application."
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
