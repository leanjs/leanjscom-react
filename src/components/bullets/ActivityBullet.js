import React from 'react'
import Bullet from './Bullet'

import { LIGHTGREY } from '../../config/styles'
import {
  DEVELOPMENT,
  TEACHING,
  INDUSTRY,
  HEART,
  DIAMOND,
  QA,
  QUICK,
} from '../../config/icons'

export const validImages = {
  development: DEVELOPMENT,
  teaching: TEACHING,
  industry: INDUSTRY,
  heart: HEART,
  diamond: DIAMOND,
  qa: QA,
  quick: QUICK,
}

const ActivityBullet = ({ image }) => (
  <Bullet
    color="black"
    bg={LIGHTGREY}
    size={60 / 18}
    images={validImages}
    image={image}
    hasBorder={false}
  />
)

export default ActivityBullet
