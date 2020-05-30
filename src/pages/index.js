/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { faEye, faBell, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Global } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

import Layout from '../components/default-layout'
import Hero from '../components/hero'
import Brands from '../components/brands'
import TextBlock from '../components/text-block'

const Home = ({ location }) => {
  return (
    <Layout
      heading="ui-diff"
      description="Screenshot testing for every framework"
      location={location}
    >
      <Global
        styles={theme => ({
          h1: {
            fontSize: theme.fontSizes[6],
            fontFamily: theme.fonts.body,
            fontWeight: 600
          },
          h2: {
            fontSize: '2.5em',
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body
          },
          h3: {
            fontSize: '1.5em',
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body
          },
          p: {
            fontSize: theme.fontSizes[3],
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body,
            lineHeight: theme.lineHeights.body,
            opacity: 0.65
          }
        })}
      />

      <Hero
        badge="Version 2.0 beta just released"
        heading="Screenshot Testing for your Website"
        lede="ui-diff is a tool that you and your team can use to quickly get a overview of what your website looks like on all of your environments and different pages in a few seconds."
        buttons={[
          <a key={0} href="https://app.ui-diff.com">
            <Button sx={{ mr: 3, minWidth: '135px' }} variant="primary">
              Try it for free <FontAwesomeIcon sx={{ ml: 3 }} icon={faGithub} />
            </Button>
          </a>,
          <Link key={1} to="/documentation">
            <Button sx={{ width: '135px' }} variant="secondary">
              Learn more
            </Button>
          </Link>
        ]}
        extra={
          <p sx={{ fontSize: 1, opacity: 0.5, mt: 3 }}>
            <i>No account or credit card needed*</i>
          </p>
        }
      />

      <Brands
        style={{ my: 5 }}
        logos={[
          'https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png',
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
          'https://about.gitlab.com/images/press/logo/png/gitlab-logo-1-color-black-rgb.png'
        ]}
      />

      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <img
          sx={{
            // my: 5,
            width: '100%',
            maxWidth: '1000px',
            boxShadow: 'large',
            borderRadius: 2
          }}
          src="https://res.cloudinary.com/albin-groen/image/upload/v1590521800/ui-diff-intro_rzmhfh.jpg"
        />
      </Flex>

      <Flex
        sx={{
          textAlign: 'center',
          my: 6,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2>Catch design regressions before going live</h2>
        <p sx={{ mt: 3 }}>
          Ever got that late night text from your boss showing you a broken
          page?
        </p>

        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextBlock
            icon={faEye}
            style={{ maxWidth: '300px', mt: 5 }}
            heading="Compare pages"
            lede="Compare your pages between all environments to catch any design regressions"
          />

          <TextBlock
            icon={faBell}
            style={{ maxWidth: '300px', mt: 5, mx: 4 }}
            heading="Get notified"
            lede="Get notified if pages change in design between any of its development environments"
          />

          <TextBlock
            icon={faCodeBranch}
            style={{ maxWidth: '300px', mt: 5 }}
            heading="Integrate into ci"
            lede="ui-diff is a flexible framework that can be integrated into any companies ci environment"
          />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home
