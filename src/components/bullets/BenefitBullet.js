import React from 'react'
import Bullet from './Bullet'

import { DARKGREY, WHITE, BLACK, LIGHTGREY } from '../../config/styles'
import {
  BUSINESS_NEEDS,
  COMPETITORS,
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
  START_SMALL,
  HOLDING_MOBILE,
  EYE,
  TICK_BADGE,
} from '../../config/icons'

export const validImages = {
  business_needs: BUSINESS_NEEDS,
  competitors: COMPETITORS,
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
  start_small: START_SMALL,
  holding_mobile: HOLDING_MOBILE,
  eye: EYE,
  tick_badge: TICK_BADGE,
}

const BenefitBullet = ({ image, dark }) => (
  <Bullet
    color={dark ? BLACK : DARKGREY}
    bg={dark ? LIGHTGREY : WHITE}
    size={60 / 18}
    images={validImages}
    image={image}
    hasBorder={!dark}
    hasPadding={image !== 'globe'}
    backgroundSize={image === 'globe' ? `122%` : null}
  />
)

export default BenefitBullet
