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
              id
              file {
                url
              }
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  queryResults.data?.allContentfulProject.edges.forEach((node, index) => {
    const projects = queryResults.data.allContentfulProject.edges
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
