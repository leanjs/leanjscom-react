import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  reactBlue,
  SPACING_STANDARD,
  FONT_SIZE_STANDARD,
} from '../../config/styles'

const Blockquote = styled.blockquote`
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

export default Blockquote
