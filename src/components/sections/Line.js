import React from 'react'
import styled from 'styled-components'
import {
  MEDIUMGREY,
  SPACING_LARGE,
  SPACING_EXTRALARGE,
} from '../../config/styles'

const getLineWidth = props => (props.wide ? SPACING_EXTRALARGE : SPACING_LARGE)

const LineOuter = styled.div`
  padding-left: ${props => parseFloat(getLineWidth(props)) + 1}rem;
  position: relative;
`

const LineInner = styled.div`
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: ${props => getLineWidth(props)};
  height: 0.17rem;
  background: ${MEDIUMGREY};
`

const Line = ({ wide = false, children }) => (
  <LineOuter wide={wide}>
    <LineInner wide={wide} />
    {children}
  </LineOuter>
)

export default Line
