import React from 'react'
import styled from 'styled-components'

import { WHITE } from '../../config/styles'

const TopicInner = styled.div`
  border:1px solid ${props => (props.color ? props.color : WHITE)};
  color:${props => (props.color ? props.color : WHITE)}

  padding:0.5em;
  margin-left:1em;
  display:inline-block;

  text-transform:uppercase;
  font-family:monospace;
  letter-spacing:0.5em;
  text-align:center;
`

export const Topic = props => (
  <TopicInner {...props}>{props.children}</TopicInner>
)
