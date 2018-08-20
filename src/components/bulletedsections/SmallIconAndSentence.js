import React from 'react'
import styled from 'styled-components'
import { SPACING_STANDARD } from '../../config/styles'

const Table = styled.div`
  display: table;
  align-items: center;
`
const Row = styled.div`
  display: table-row;
  > div {
  }
`
const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-left: ${props => (props.first ? `0` : SPACING_STANDARD)};
`

const SmallIconAndSentence = props => (
  <Table>
    <Row>
      <Cell first={props.first}>{props.icon}</Cell>
      <Cell>{props.sentence}</Cell>
    </Row>
  </Table>
)

export default SmallIconAndSentence
