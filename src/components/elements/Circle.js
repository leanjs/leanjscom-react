import React from 'react'
import styled from 'styled-components'

const defaultSize = 36
const defaultBorderWidth = 4

const CircleOuter = styled.div`
  border-radius: 100%;
  height: ${props => (props.size ? props.size : defaultSize)}px;
  width: ${props => (props.size ? props.size : defaultSize)}px;
  padding: 0.5em;
  ${props => (props.bg ? `background: ${props.bg}` : null)};
  border: ${props =>
    props.hasBorder
      ? `${
          props.borderWidth ? props.borderWidth : defaultBorderWidth
        }px solid ${props.color}`
      : `none`};
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
  display: flex;
  align-items: center;
  justify-content: center;
`

const Circle = props => (
  <CircleOuter {...props}>
    <CircleInner {...props}>{props.children}</CircleInner>
  </CircleOuter>
)

export default Circle
