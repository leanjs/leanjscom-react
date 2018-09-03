import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  reactBlue,
  SPACING_STANDARD,
  SPACING_MEDIUM,
  FONT_SIZE_STANDARD,
  LINE_HEIGHT_LARGE,
} from '../../config/styles'

export const Blockquote = styled.blockquote`
  ${FONT_FAMILY} margin: 0;
  padding: 0;
  quotes: '“' '”' '‘' '’';
  :before {
    content: open-quote;
  }
  :after {
    content: close-quote;
  }
`

export const Blockquote2 = styled(Blockquote)`
  font-size: ${FONT_SIZE_STANDARD};
  font-style: italic;
  line-height: ${LINE_HEIGHT_LARGE};
  display: inline-block;
  padding-left: ${props => (props.padLeft ? SPACING_MEDIUM : `0`)};
`

export default Blockquote
