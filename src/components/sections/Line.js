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
  top: ${props => (props.verticalCenter ? `50%` : `0`)};
  width: ${props => getLineWidth(props)};
  height: 3px;
  background: ${MEDIUMGREY};
`

const Line = ({ wide = false, children, verticalCenter = false }) => (
  <LineOuter wide={wide}>
    <LineInner wide={wide} verticalCenter={verticalCenter} />
    {children}
  </LineOuter>
)

export default Line
