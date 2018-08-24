import React from 'react'
import Grid, { Col, Row } from '../layout/Grid'
import SmallIconAndSentence from './SmallIconAndSentence'
import ValueBullet from '../bullets/ValueBullet'

const Item = props => {
  const Bullet = props.bulletType

  return (
    <SmallIconAndSentence
      icon={<Bullet image={props.image} />}
      sentence={props.sentence}
      first={props.first}
      flushLeft={props.flushLeft}
    />
  )
}

const SmallIconAndSentences = props => {
  const colSpan = Math.floor(12 / props.items.length)
  return (
    <React.Fragment>
      {props.items.map((item, i) => {
        const key = `small-icon-and-sentences-${i}-${new Date().getTime()}`
        if (props.wrapWithCols) {
          return (
            <Col md={colSpan} key={key}>
              <Item
                {...item}
                bulletType={props.bulletType}
                flushLeft={props.flushLeft ? true : false}
                first={i === 0}
              />
            </Col>
          )
        }

        return <Item {...item} key={key} first={i === 0} />
      })}
    </React.Fragment>
  )
}

export default SmallIconAndSentences
