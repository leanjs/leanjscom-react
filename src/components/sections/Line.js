import React from 'react'
import styled from 'styled-components'
import {
  MEDIUMGREY,
  SPACING_MEDIUM,
  SPACING_XXLARGE,
} from '../../config/styles'

const getLineWidth = props => (props.wide ? SPACING_XXLARGE : SPACING_MEDIUM)

const getLeftPadding = props => `${parseFloat(getLineWidth(props)) + 1}rem`

const LineOuter = styled.div`
  padding-bottom: ${SPACING_MEDIUM};
`

const LineInner = styled.div`
  padding-left: ${props => getLeftPadding(props)};
  position: relative;

  h3 {
    display: inline-block;
  }
`

const LineActualLine = styled.div`
  ${props =>
    props.verticalCenter
      ? `
    position: absolute;
    left: 0;
    top: 50%;
  `
      : `
    margin-left: -${getLeftPadding(props)};
    margin-right: 1rem;
    display:inline-block;
    vertical-align:middle;
  `}

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
