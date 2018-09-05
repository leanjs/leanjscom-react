import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import favicon from './favicon.ico'

import Footer from '../components/layout/Footer'
import Grid from '../components/layout/Grid'
import './index.css'
import './reset.css'

import { ThemeProvider } from 'styled-components'
import { injectGlobal } from 'styled-components'

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: null, // rem
      md: null, // rem
      lg: 64, // rem
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
