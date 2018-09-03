import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  FONT_SIZE_STANDARD,
  SPACING_STANDARD,
  LINE_HEIGHT_STANDARD,
} from '../../config/styles'

export default styled.p`
  ${FONT_FAMILY}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: ${SPACING_STANDARD};
  line-height: ${LINE_HEIGHT_STANDARD};
`
