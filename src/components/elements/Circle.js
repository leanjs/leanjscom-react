import React from 'react'
import styled from 'styled-components'

const defaultSize = 36

const CircleOuter = styled.div`
  border-radius: 100%;
  height: ${props => (props.size ? props.size : defaultSize)}px;
  width: ${props => (props.size ? props.size : defaultSize)}px;
  padding: 0.5em;
  ${props => (props.bg ? `background: ${props.bg}` : null)};
  border: ${props => (props.hasBorder ? `4px solid ${props.color}` : `none`)};
  box-sizing: border-box;
`

const CircleInner = styled.div`
  ${props =>
    props.backgroundImage
      ? `background: transparent url(${
          props.backgroundImage
        }) center/contain no-repeat scroll;`
      : null};
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Circle = props => (
  <CircleOuter {...props}>
    <CircleInner {...props} />
  </CircleOuter>
)

export default Circle
