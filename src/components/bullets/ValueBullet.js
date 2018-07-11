import React from 'react'
import Bullet from './Bullet'

const images = {
  learning:
    'data:image/png;base64,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',
  caring:
    'data:image/png;base64,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',
  people:
    'data:image/png;base64,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',
}

const ValueBullet = ({ image }) => (
  <Bullet
    color="lightgrey"
    bg="black"
    size={60}
    hasBorder={true}
    images={images}
    image={image}
  />
)

export default ValueBullet
