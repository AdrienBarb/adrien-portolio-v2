module.exports = {
  siteMetadata: {
    title: "adrien-portfolio-v2",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "KKZxasFRpcn1YP7rqeqLjjoFZ2-9ts3MxVCTkL-KBYE",
        spaceId: "8qvy25wo0zyo",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
