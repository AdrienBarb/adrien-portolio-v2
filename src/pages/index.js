import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import { Helmet } from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import Slide from '../components/Slide'
// @ts-ignore
import website from '../images/website.svg'
// @ts-ignore
import webApp from '../images/web-app.svg'
// @ts-ignore
import mvp from '../images/mvp.svg'
import { IndexStyled } from '../styles/indexStyles'

const index = () => {
  const onLeave = (origin, destination, direction) => {
    console.log('Leaving section ' + origin.index)
  }
  const afterLoad = (origin, destination, direction) => {
    console.log('After load: ' + destination.index)
  }

  return (
    <IndexStyled>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adrien Barbier | Home</title>
      </Helmet>
      <ReactFullpage
        scrollOverflow={true}
        onLeave={onLeave}
        afterLoad={afterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Homepage />
              </div>
              <div className="section">
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
              </div>
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          )
        }}
      />
    </IndexStyled>
  )
}

export default index
