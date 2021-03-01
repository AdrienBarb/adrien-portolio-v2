const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
        query {
            allContentfulProject  {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
  `);


  queryResults.data.allContentfulProject.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        article: node,
      },
    })
  })

};