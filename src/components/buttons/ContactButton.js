import React from 'react'
import { LinkIconButton } from './IconButton'
import { CHAT } from '../../config/icons'

const ContactButton = () => (
  <LinkIconButton image={CHAT} text="Contact" to="#contact" />
)

export default ContactButton
