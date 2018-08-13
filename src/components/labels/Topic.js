import React from 'react'
import styled from 'styled-components'

import { WHITE, DARKGREY } from '../../config/styles'

// To maintain text centering while using letter-spacing, the text must be offset by the same amount as the letter spacing
// So store the amounti in a variable so that it can easily be used in both places.
const letterSpacing = '0.5em'

const TopicInner = styled.div`
  border: 1px solid ${props => (props.color ? props.color : WHITE)};
  color: ${props => (props.color ? props.color : WHITE)};
  background: ${props => (props.dark ? DARKGREY : `transparent`)};

  padding: 0.5em;
  margin-left: 1em;
  display: inline-block;

  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: ${letterSpacing};
  text-indent: ${letterSpacing};
  text-align: center;
`

const Topic = props => <TopicInner {...props}>{props.children}</TopicInner>

export default Topic
