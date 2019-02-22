import React from 'react'
import Bullet from './Bullet'

import { MEDIUMGREY } from '../../config/styles'
import {
  LOGO_ABINBEV,
  LOGO_BU,
  LOGO_ASOS,
  LOGO_FINGOPAY,
} from '../../resources/icons'

export const validImages = {
  abinbev: LOGO_ABINBEV,
  bostonuniversity: LOGO_BU,
  asos: LOGO_ASOS,
  fingopay: LOGO_FINGOPAY,
}

const bulletSize = 120 / 18

const CaseStudyBullet = ({ image }) => (
  <Bullet
    color={MEDIUMGREY}
    bg="white"
    size={bulletSize}
    borderSize={4 / 18}
    images={validImages}
    image={image}
    hasBorder={true}
  />
)

export default CaseStudyBullet
