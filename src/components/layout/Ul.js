import React from 'react'
import styled from 'styled-components'
import {
  FONT_FAMILY,
  WHITE,
  SPACING_SMALL,
  SPACING_STANDARD,
  SPACING_MEDIUM,
} from '../../config/styles'

const getPadding = props => {
  const y = props.wide ? SPACING_STANDARD : SPACING_SMALL
  const x = {
    big: props.wide ? SPACING_MEDIUM : SPACING_STANDARD,
    std: props.wide ? SPACING_STANDARD : SPACING_SMALL,
  }
  const left = props.flushLeft ? 0 : x.std
  const right = props.flushLeft ? x.big : x.std

  return `${y} ${right} ${y} ${left}`
}

const Ul = styled.ul`
  ${props =>
    props.unstyled
      ? `
    margin-left: 0;
    > li {
      list-style-type: none;
    }
  `
      : ''} ${props =>
    props.inline
      ? `
          margin: 0;
          padding: 0;
          > li {
            display: inline-block;
            padding: ${getPadding(props)};
            margin-bottom:0;
            :first-child {
              padding-left: 0;
            }
            :last-child {
              padding-right: 0;
            }
          }
        `
      : ''};
`

const Li = styled.li`
  ${FONT_FAMILY};
`

export { Ul, Li }
export default Ul
