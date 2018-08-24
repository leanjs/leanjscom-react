import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  TEXT_SIZE,
  FONT_SIZE_STANDARD,
  SPACING_STANDARD,
} from '../../config/styles'

export default styled.p`
  ${TEXT_SIZE}
  ${FONT_FAMILY}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: ${SPACING_STANDARD};
  > a {
    ${TEXT_SIZE}
  }
`
