import React from 'react'
import styled from 'styled-components'
import { SPACING_STANDARD, SPACING_LARGE } from '../../config/styles'
import { SCREEN_SM_MAX } from '../utils'

const Table = styled.div`
  display: table;
  align-items: center;
`
const Row = styled.div`
  display: table-row;
  > div {
  }
`
const getLeftPadding = isWideScreen => props =>
  `padding-left: ${
    props.firstTable || (props.firstCell && !isWideScreen)
      ? `0`
      : `${isWideScreen ? SPACING_LARGE : SPACING_STANDARD}`
  }`

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: ${SPACING_STANDARD};
  ${getLeftPadding(true)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    ${getLeftPadding(false)};
  }
`

const SmallIconAndSentence = props => (
  <Table>
    <Row>
      <Cell firstCell firstTable={props.first}>
        {props.icon}
      </Cell>
      <Cell>{props.sentence}</Cell>
    </Row>
  </Table>
)

export default SmallIconAndSentence
