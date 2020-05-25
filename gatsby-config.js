/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 't3zmvotc',
        dataset: 'production'
      }
    },
    'gatsby-plugin-theme-ui'
  ],
}
