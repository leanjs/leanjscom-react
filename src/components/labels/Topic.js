import React from 'react'
import styled from 'styled-components'

import { WHITE } from '../../config/styles'

const TopicInner = styled.div`
  border:1px solid ${props => (props.color ? props.color : WHITE)};
  padding:1em;

  color:${props => (props.color ? props.color : WHITE)}

  display:inline-block;
  text-transform:uppercase;
  font-family:monospace;
  letter-spacing:0.5em;
`

export const Topic = ({ type, ...props }) => (
  <TopicInner {...props}>{type}</TopicInner>
)
