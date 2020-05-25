/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'

const Home = () => {
  return (
    <header
      sx={{
        backgroundColor: 'primary',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Heading sx={{ color: 'background', fontSize: 7 }}>ui-diff</Heading>
    </header>
  )
}

export default Home
