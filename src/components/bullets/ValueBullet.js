import React from 'react'
import Bullet from './Bullet'

import { LIGHTGREY } from '../../config/styles'
import { LEARNING, CARING, PEOPLE_2 } from '../../config/icons'

const images = {
  learning: LEARNING,
  caring: CARING,
  people: PEOPLE_2,
}

const ValueBullet = ({ image }) => (
  <Bullet
    color={LIGHTGREY}
    bg="black"
    size={60 / 18}
    hasBorder={true}
    images={images}
    image={image}
  />
)

export default ValueBullet
