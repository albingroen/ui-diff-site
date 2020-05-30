/** @jsx jsx */
import { jsx, Flex, Badge } from 'theme-ui'

const Hero = ({ badge, heading, lede, buttons, extra }) => (
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
    {badge && (
      <Badge variant="primary" sx={{ mb: 4 }}>
        {badge}
      </Badge>
    )}

    <h1>{heading}</h1>

    <p sx={{ my: 3, fontSize: 3 }}>{lede}</p>

    <Flex sx={{ mt: 4 }}>{buttons.map(button => button)}</Flex>

    {extra}
  </Flex>
)

export default Hero
