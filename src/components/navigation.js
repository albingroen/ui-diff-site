/** @jsx jsx */
import { jsx, Card, Button } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from '../../static/logo.svg'

const navigationItems = [
  [
    {
      text: <Logo sx={{ width: 36, height: 36, mr: '1.5rem' }} />,
      link: '/',
      withoutPadding: true
    },
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Documentation',
      link: '/documentation'
    }
  ],
  [
    {
      text: <Button sx={{ py: 3 }}>Get started</Button>,
      href: 'https://app.ui-diff.com',
      withoutPadding: true
    }
  ]
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
    <div
      sx={{
        px: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {navigationItems.map(items => {
        return (
          <div
            key={Math.random()}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {items.map((item, i) => {
              const isFirst = i === 0
              const isLast = i === items.length - 1
              const isActive =
                location.pathname === item.link ||
                location.pathname === item.link + '/' ||
                (item.link !== '/' && location.pathname.includes(item.link))

              const Comp = item.link ? Link : 'a'

              return (
                <Comp
                  key={item.link}
                  to={item.link}
                  href={item.href}
                  sx={{
                    display: 'inline-block',
                    fontSize: 2,
                    opacity: isActive ? 1 : !item.withoutPadding ? 0.5 : 1,
                    lineHeight: 'default',
                    ...(!item.withoutPadding && {
                      py: '2rem',
                      pl: isFirst ? 0 : 3,
                      pr: isLast ? 0 : 3
                    })
                  }}
                >
                  {item.text}
                </Comp>
              )
            })}
          </div>
        )
      })}
    </div>
  </Card>
)

export default Navigation
