/** @jsx jsx */
import { jsx, Heading, Divider, Text } from 'theme-ui'
import Navigation from './navigation'

const SimpleLayout = ({ heading, lede, children, location }) => (
  <div>
    <Navigation location={location} />
    <div
      sx={{ maxWidth: '1200px', margin: '0 auto', padding: 5, paddingTop: 6 }}
    >
      <Heading sx={{ fontSize: 6, fontWeight: 'body' }}>{heading}</Heading>
      <Text
        sx={{
          fontSize: 3,
          fontWeight: 'body',
          fontFamily: 'body',
          mt: 3,
          opacity: 0.65
        }}
      >
        {lede}
      </Text>
      <Divider sx={{ my: 4, opacity: 0.2 }} />
      {children}
    </div>
  </div>
)

export default SimpleLayout
