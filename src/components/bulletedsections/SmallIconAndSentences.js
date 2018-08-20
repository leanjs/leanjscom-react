import React from 'react'
import Grid, { Col, Row } from '../layout/Grid'
import SmallIconAndSentence from './SmallIconAndSentence'
import ValueBullet from '../bullets/ValueBullet'

const Item = props => (
  <SmallIconAndSentence
    icon={<ValueBullet image={props.image} />}
    sentence={props.sentence}
    first={props.first}
  />
)

const SmallIconAndSentences = props => {
  const colSpan = Math.floor(12 / props.items.length)
  return (
    <React.Fragment>
      {props.items.map((item, i) => {
        if (props.wrapWithCols) {
          return (
            <Col md={colSpan}>
              <Item {...item} first={i === 0} />
            </Col>
          )
        }

        return <Item {...item} first={i === 0} />
      })}
    </React.Fragment>
  )
}

export default SmallIconAndSentences
