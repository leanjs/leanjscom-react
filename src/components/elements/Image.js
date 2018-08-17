import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SPACING_STANDARD } from '../../config/styles'

const Image = styled.img`
  margin: 0;
  padding-bottom: ${SPACING_STANDARD};
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
