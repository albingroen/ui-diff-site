import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/simple-layout'
import BlockContent from '@sanity/block-content-to-react'
import Gist from 'react-gist'

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

const Post = ({ data }) => {
  return (
    <Layout heading={data.sanityPost.title}>
      <div className="block-content">
        <BlockContent
          serializers={serializers}
          blocks={data.sanityPost._rawBody}
        />
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
