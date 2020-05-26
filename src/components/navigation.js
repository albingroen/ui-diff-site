/** @jsx jsx */
import { jsx, Card } from 'theme-ui'
import { Link } from 'gatsby'

const getNavigationItems = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Documentation',
    link: '/documentation'
  },
  {
    text: 'Log in',
    href: 'https://app.ui-diff.com'
  }
]

const Navigation = ({ location }) => (
  <Card
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      p: 0,
      zIndex: 100
    }}
  >
    <div sx={{ maxWidth: '1200px', margin: '0 auto', px: 5 }}>
      {getNavigationItems.map((item, i) => {
        const isFirst = i === 0
        const isLast = i === getNavigationItems.length - 1
        const isActive = location.pathname === item.link

        const Comp = item.link ? Link : 'a'

        return (
          <Comp
            key={item.link}
            to={item.link}
            href={item.href}
            sx={{
              display: 'inline-block',
              fontSize: 2,
              py: '1.5rem',
              pl: isFirst ? 0 : 3,
              pr: isLast ? 0 : 3,
              color: isActive ? 'primary' : 'auto',
              float: isLast && 'right'
            }}
          >
            {item.text}
          </Comp>
        )
      })}
    </div>
  </Card>
)

export default Navigation
