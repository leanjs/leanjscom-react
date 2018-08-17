import React from 'react'
import Bullet from './Bullet'

import { DARKGREY, WHITE, BLACK, LIGHTGREY } from '../../config/styles'
import {
  QUALITY,
  COST_EFFECTIVE,
  QUICK,
  CHAT,
  GIFT,
  CALENDAR,
  TOOLS,
  CODE,
  EXPAND,
  HEART,
  PEOPLE,
  HEAD,
  TEAM,
  REACT,
  GLOBE,
} from '../../config/icons'

const images = {
  quality: QUALITY,
  costeffective: COST_EFFECTIVE,
  quick: QUICK,
  chat: CHAT,
  gift: GIFT,
  calendar: CALENDAR,
  tools: TOOLS,
  code: CODE,
  expand: EXPAND,
  heart: HEART,
  people: PEOPLE,
  head: HEAD,
  team: TEAM,
  react: REACT,
  globe: GLOBE,
}

const BenefitBullet = ({ image, dark }) => (
  <Bullet
    color={dark ? BLACK : DARKGREY}
    bg={dark ? LIGHTGREY : WHITE}
    size={60 / 18}
    images={images}
    image={image}
    hasBorder={!dark}
    hasPadding={image !== 'globe'}
    backgroundSize={image === 'globe' ? `122%` : null}
  />
)

export default BenefitBullet
