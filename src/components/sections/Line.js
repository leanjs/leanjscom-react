import React from 'react'
import theme from '../../layouts/rebass-theme'
import styled from 'styled-components'

const LineOuter = styled.div`
  padding-left: ${props => props.lineWidth + 10}px;
  position: relative;
`

const LineInner = styled.div`
  position: absolute;
  left: 0;
  top: ${props => (props.verticalCenter ? `50%` : `0`)};
  width: ${props => props.lineWidth}px;
  height: 3px;
  background: ${theme.colors.mediumgrey};
`

const Line = ({ lineWidth = 35, children, verticalCenter = false }) => (
  <LineOuter lineWidth={lineWidth}>
    <LineInner lineWidth={lineWidth} verticalCenter={verticalCenter} />
    {children}
  </LineOuter>
)

export default Line
