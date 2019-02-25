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

  const { wrapWithCols, markupAsList, bulletType, flushLeft, items } = props

  if (wrapWithCols && markupAsList) {
    throw new Error('Cannot both wrap with cols and mark up as list')
  }

  const itemElements = items.map((item, i) => {
    const key = `small-icon-and-sentences-${i}-${new Date().getTime()}`

    const itemElement = (
      <Item
        {...item}
        bulletType={bulletType}
        flushLeft={flushLeft ? true : false}
        first={i === 0}
        key={`${key}-item`}
      />
    )

    if (wrapWithCols) {
      return (
        <Col md={colSpan} key={key}>
          {itemElement}
        </Col>
      )
    }

    return itemElement
  })

  if (markupAsList) {
    return (
      <ul>
        {itemElements.map((itemElement, i) => (
          <li key={`list-item-${i}-${new Date().getTime()}`}>{itemElement}</li>
        ))}
      </ul>
    )
  }

  return itemElements
}

export default SmallIconAndSentences
