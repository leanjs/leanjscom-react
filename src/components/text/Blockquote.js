import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  reactBlue,
  SPACING_STANDARD,
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

  ${props => {
    if (props.bg === 'primary') {
      return `
        padding: ${SPACING_STANDARD};
        background-color: ${reactBlue()};
        font-size: ${FONT_SIZE_STANDARD};
        font-style: italic;
      `
    }
  }};
`

export const Blockquote2 = styled(Blockquote)`
  font-size: ${FONT_SIZE_STANDARD};
  font-style: italic;
  line-height: ${LINE_HEIGHT_LARGE};
`

export default Blockquote
