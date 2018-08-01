import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/layout/Footer'
import Menu from '../components/navigation/menu'
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
      sm: 46, // rem
      md: 64, // rem
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
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {/*<Menu />*/}
      <Menu />

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
