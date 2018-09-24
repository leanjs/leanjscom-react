import React from 'react'
import styled from 'styled-components'
import { SPACING_STANDARD, SPACING_MEDIUM, SPACING_XXLARGE } from '../../config/styles'

const getIndent = props => (props.wide ? SPACING_XXLARGE : SPACING_MEDIUM)

const Outer = styled.div`
  padding-bottom: ${SPACING_MEDIUM};
`

const Inner = styled.div`
  padding-left: ${props => parseFloat(getIndent(props)) + 1}rem;
`

const Indented = ({ wide = false, children }) => (
  <Outer>
    <Inner wide={wide}>{children}</Inner>
  </Outer>
)

export default Indented
