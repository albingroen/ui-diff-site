/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { Global } from '@emotion/core'

import Layout from '../components/default-layout'
import { Link } from 'gatsby'

const Home = ({ location }) => {
  return (
    <Layout
      heading="ui-diff"
      description="Screenshot testing for every framework"
      location={location}
    >
      <Global
        styles={theme => {
          console.log({
            theme
          })

          return {
            h1: {
              fontSize: theme.fontSizes[6],
              fontFamily: theme.fonts.body,
              fontWeight: 600
            },
            p: {
              fontSize: theme.fontSizes[3],
              fontFamily: theme.fonts.body,
              fontWeight: theme.fontWeights.body,
              lineHeight: theme.lineHeights.body,
              opacity: 0.65
            }
          }
        }}
      />

      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto'
        }}
      >
        <h1>Screenshot Testing for your Website</h1>

        <p sx={{ my: 3, fontSize: 4 }}>
          ui-diff is a tool that you and your team can use to quickly get a
          overview of what your website looks like on all of your environments
          and different pages in a few seconds.
        </p>

        <Flex sx={{ mt: 4 }}>
          <a href="https://app.ui-diff.com">
            <Button sx={{ mr: 3 }} variant="brand">
              Get started
            </Button>
          </a>
          <Link to="/documentation">
            <Button variant="secondary">Learn more</Button>
          </Link>
        </Flex>
      </Flex>

      <img
        sx={{
          margin: '0 auto',
          my: 5,
          width: '100%',
          maxWidth: '1200px',
          boxShadow: 'large',
          borderRadius: 2
        }}
        src="https://res.cloudinary.com/albin-groen/image/upload/v1590521800/ui-diff-intro_rzmhfh.jpg"
      />
    </Layout>
  )
}

export default Home
