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
            title
          }
        }
      }
    }
  `)

  result.data.allSanityPost.edges.forEach(({ node }, i) => {
    const prevPost = result.data.allSanityPost.edges[i - 1]
    const nextPost = result.data.allSanityPost.edges[i + 1]

    createPage({
      path: `/documentation/${node.slug.current}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug.current,
        prev: prevPost,
        next: nextPost
      }
    })
  })
}
