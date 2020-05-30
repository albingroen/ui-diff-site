/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextBlock = ({ icon, heading, lede, style }) => (
  <div sx={{ textAlign: 'center', ...style }}>
    {icon && (
      <FontAwesomeIcon
        sx={{ fontSize: 6, color: 'primary', mb: 3 }}
        icon={icon}
      />
    )}
    <h3 sx={{ mb: 2 }}>{heading}</h3>
    <p sx={{ fontSize: 2 }}>{lede}</p>
  </div>
)

export default TextBlock
