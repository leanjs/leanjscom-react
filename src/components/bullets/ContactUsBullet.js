import React from 'react'
import Bullet from './Bullet'

import { EXTRADARKGREY, WHITE } from '../../config/styles'
import {
  PHONE,
  EMAIL,
  TWITTER,
  INSTAGRAM,
  HANGOUTS,
  OFFICE,
} from '../../config/icons'

export const validImages = {
  phone: PHONE,
  email: EMAIL,
  twitter: TWITTER,
  instagram: INSTAGRAM,
  hangouts: HANGOUTS,
  office: OFFICE,
}

const ContactUsBullet = ({ image }) => (
  <Bullet
    color={WHITE}
    bg={EXTRADARKGREY}
    size={40 / 18}
    images={validImages}
    image={image}
    hasBorder={false}
  />
)

export default ContactUsBullet
