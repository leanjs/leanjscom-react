import React from 'react'
import styled from 'styled-components'

import { WHITE, DARKGREY } from '../../config/styles'

const TopicInner = styled.div`
  border: 1px solid ${props => (props.color ? props.color : WHITE)};
  color: ${props => (props.color ? props.color : WHITE)};
  background: ${props => (props.dark ? DARKGREY : `transparent`)};

  padding: 0.5em;
  margin-left: 1em;
  display: inline-block;

  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: 0.5em;
  text-align: center;
`

const Topic = props => <TopicInner {...props}>{props.children}</TopicInner>

export default Topic
