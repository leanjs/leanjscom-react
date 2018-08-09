import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

export default styled.p`
  ${TEXT_SIZE}
  ${props => props.quote && `font-size: 20px; font-style: italic;`}
  ${FONT_FAMILY}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: 1em;
  line-height: 1.2;
  > a {
    ${TEXT_SIZE}
  }
`
