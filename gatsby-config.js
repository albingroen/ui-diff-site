module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't3zmvotc',
        dataset: 'production'
      }
    },
    'gatsby-plugin-theme-ui'
  ]
}
