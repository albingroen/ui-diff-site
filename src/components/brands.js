/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const Brands = ({ text, logos, style }) => {
  return (
    <div sx={style}>
      {text && (
        <p sx={{ fontSize: 1, opacity: 0.5, my: 3, textAlign: 'center' }}>
          {text}
        </p>
      )}
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {logos.map(logo => (
          <img
            key={logo}
            sx={{ mx: 3, maxWidth: '200px', opacity: 0.2 }}
            src={logo}
          />
        ))}
      </Flex>
    </div>
  )
}

export default Brands
