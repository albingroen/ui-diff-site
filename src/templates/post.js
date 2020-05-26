/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import BlockContent from '@sanity/block-content-to-react'
import Gist from 'react-gist'
import Layout from '../components/simple-layout'
import { graphql, Link } from 'gatsby'

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    gist: props => <Gist id={props.node.id} />
  }
}

const Post = ({ data, pageContext, location }) => {
  const { prev, next } = pageContext

  return (
    <Layout heading={data.sanityPost.title} location={location}>
      <div className="block-content">
        <BlockContent
          serializers={serializers}
          blocks={data.sanityPost._rawBody}
        />
        <Flex sx={{ justifyContent: 'space-between', my: 5, fontSize: 3 }}>
          {prev ? (
            <Link to={`/documentation/${prev.node.slug.current}`}>
              Prev: {prev.node.title}
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link to={`/documentation/${next.node.slug.current}`}>
              Next: {next.node.title}
            </Link>
          )}
        </Flex>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawBody
    }
  }
`

export default Post
