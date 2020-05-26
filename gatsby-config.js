module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't3zmvotc',
        dataset: 'production'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet'
  ]
}
