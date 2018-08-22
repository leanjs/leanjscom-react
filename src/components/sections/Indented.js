import React from 'react'
import styled from 'styled-components'
import { SPACING_LARGE, SPACING_EXTRALARGE } from '../../config/styles'

const getIndent = props => (props.wide ? SPACING_EXTRALARGE : SPACING_LARGE)

const Outer = styled.div`
  padding-bottom: ${SPACING_LARGE};
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
