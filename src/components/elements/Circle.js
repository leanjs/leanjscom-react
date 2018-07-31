import React from 'react'
import styled from 'styled-components'

const CircleOuter = styled.div`
  border-radius: 100%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  padding: 0.25em 0.5em;
  ${props => (props.bg ? `background: ${props.bg}` : null)};
  border: ${props => (props.hasBorder ? `4px solid ${props.color}` : `none`)};
`

const CircleInner = styled.div`
  ${props =>
    props.backgroundImage
      ? `background: transparent url(${
          props.backgroundImage
        }) center/contain no-repeat scroll;`
      : null};
  width: 90%;
  height: 90%;
  margin: 0 auto;
`

const Circle = props => (
  <CircleOuter {...props}>
    <CircleInner {...props} />
  </CircleOuter>
)

export default Circle
