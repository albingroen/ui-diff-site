/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Navigation from './navigation'

const DefaultLayout = ({ heading, lede, children, location }) => (
  <div>
    <Navigation location={location} />
    <div
      sx={{
        padding: 5,
        paddingTop: '12rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      <Helmet>
        <title>{heading} | ui-diff</title>
        <meta name="description" content={lede} />
        <meta
          name="keywords"
          content="ui-diff, screenshot, testing, javascript, html, css"
        />
      </Helmet>

      {children}
    </div>
  </div>
)

export default DefaultLayout
