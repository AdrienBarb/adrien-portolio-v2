const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            title
            slug
            description {
              description
            }
            website
            projectVideo {
              fluid(maxWidth: 980) {
                src
              }
            }
          }
        }
      }
    }
  `)

  console.log(queryResults)
  const projects = queryResults.data.allContentfulProject.edges
  queryResults.data.allContentfulProject.edges.forEach((node, index) => {
    createPage({
      path: node.node.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        article: node.node,
        prev: index === 0 ? null : projects[index - 1].node,
        next: index === projects.length - 1 ? null : projects[index + 1].node,
      },
    })
  })
}
