/** @jsx jsx */
import { jsx, Heading, Card } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import SimpleLayout from '../components/simple-layout'

const Documentation = ({ data, ...rest }) => {
  const posts = data.allSanityPost.edges.map(({ node }) => node)

  return (
    <SimpleLayout
      heading="Documentation"
      lede="Here you'll find documentation about how to use ui-diff"
      location={rest.location}
    >
      {posts.map(post => (
        <Link key={post.title} to={`/documentation/${post.slug.current}`}>
          <Card
            sx={{
              borderRightWidth: '5px',
              borderRightStyle: 'solid',
              borderRightColor: 'primary',
              marginBottom: 3
            }}
          >
            <Heading sx={{ fontSize: 4, fontWeight: 'body' }}>
              {post.title}
            </Heading>
          </Card>
        </Link>
      ))}
    </SimpleLayout>
  )
}

export const query = graphql`
  query PostQuery {
    allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }
`

export default Documentation
