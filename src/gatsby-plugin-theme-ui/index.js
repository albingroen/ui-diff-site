import { darken, lighten } from '@theme-ui/color'

export default {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#2ea44f',
    secondary: '#222',
    gray: '#ddd',
    blue: '#006aff'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    default: 1,
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      boxShadow: '0 3.5px 10px rgba(0, 0, 0, 0.1)',
      background: '#fff'
    }
  },
  shadows: {
    default: '0 3.5px 10px rgba(0, 0, 0, 0.1)',
    large: '0 20px 30px rgba(0, 0, 0, 0.1)'
  },
  radii: [3, 5, 7, 10],
  buttons: {
    primary: {
      py: 3,
      px: 4,
      transition: '0.2s ease-in-out 0s',
      '&:hover': {
        background: darken('primary', 0.1),
        transition: '0.2s ease-in-out 0s'
      }
    },
    secondary: {
      py: 3,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      color: '#777',
      transition: '0.2s ease-in-out 0s',
      '&:hover': {
        background: lighten('gray', 0.1),
        transition: '0.2s ease-in-out 0s'
      }
    },
    primarySmall: {
      fontSize: 1,
      p: '0.75rem 0.875rem',
      transition: '0.2s ease-in-out 0s',
      '&:hover': {
        background: darken('primary', 0.1),
        transition: '0.2s ease-in-out 0s'
      }
    }
  },
  badges: {
    primary: {
      p: 2,
      px: 3,
      fontWeight: 'body',
      backgroundColor: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#ddd',
      color: '#aaa',
      fontSize: 1,
      borderRadius: 1
    }
  }
}
