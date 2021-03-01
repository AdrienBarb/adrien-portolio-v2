require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'adrien-portfolio-v2',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFULL_TOKEN,
        spaceId: process.env.CONTENTFULL_SPACE_ID,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Mono`,
          `source sans pro\:200,300,400,500,600,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
