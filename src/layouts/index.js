import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from './favicon.ico'

import Footer from '../components/layout/Footer'
import './index.css'
import './reset.css'

import { ThemeProvider } from 'styled-components'

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      // In small and medium screens the container takes full with, so no size is specified
      sm: null,
      md: null,
      // In large screens the container takes a fixed width of 64rm
      lg: 64,
    },
  },
}

const Layout = ({ children, data }) => (
  <ThemeProvider theme={gridTheme}>
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'LeanJS is a boutique of excellence focused on Lean, JavaScript, Agile, and people.',
          },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
      />

      {children()}

      <Footer />
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
