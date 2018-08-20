import React from 'react'
import styled from 'styled-components'
import {
  MEDIUMGREY,
  SPACING_LARGE,
  SPACING_EXTRALARGE,
} from '../../config/styles'

const getLineWidth = props => (props.wide ? SPACING_EXTRALARGE : SPACING_LARGE)

const LineOuter = styled.div`
  padding-bottom: ${SPACING_LARGE};
`

const LineInner = styled.div`
  padding-left: ${props => parseFloat(getLineWidth(props)) + 1}rem;
  position: relative;
`

const LineActualLine = styled.div`
  position: absolute;
  left: 0;
  top: ${props => (props.verticalCenter ? `50%` : `0.75rem`)};
  width: ${props => getLineWidth(props)};
  height: 0.17rem;
  background: ${MEDIUMGREY};
`

const Line = ({ wide = false, verticalCenter = false, children }) => (
  <LineOuter>
    <LineInner wide={wide}>
      <LineActualLine verticalCenter={verticalCenter} wide={wide} />
      {children}
    </LineInner>
  </LineOuter>
)

export default Line
