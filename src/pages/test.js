// import React from "react"
// import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
// import * as propTypes from "prop-types"

// // Import the new rendering and the render node definitions
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { BLOCKS, INLINES } from "@contentful/rich-text-types"

// import Layout from "../components/layout"

// // Setting the rendering options. Same as:
// // https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
// const options = {
//   renderNode: {
//     [INLINES.ENTRY_HYPERLINK]: ({
//       data: {
//         target: { slug, title },
//       },
//     }) => <Link to={slug}>{title}</Link>,
//     [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,
//   },
// }

// function PageTemplate({ data }) {
//   const { title, description } = data.contentfulPages

//   return (
//     <Layout>
//       <h1>{title}</h1>
//       {/* Render the Rich Text field data: */}
//       {description && renderRichText(description, options)}
//     </Layout>
//   )
// }

// PageTemplate.propTypes = {
//   data: propTypes.object.isRequired,
// }

// export default PageTemplate

// export const pageQuery = graphql`
//   query {
//     contentfulPages {
//       title
//       slug
//       description {
//         raw
//       }
//     }
//   }
// `