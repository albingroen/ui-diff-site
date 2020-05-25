const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  result.data.allSanityPost.edges.forEach(({ node }) => {
    createPage({
      path: `/documentation/${node.slug.current}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug.current
      }
    })
  })
}
