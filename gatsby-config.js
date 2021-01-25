require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "adrien-portfolio-v2",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFULL_TOKEN,
        spaceId: process.env.CONTENTFULL_SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
