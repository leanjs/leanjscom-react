import React from 'react'
import { LinkIconButton } from './IconButton'
import { CHAT } from '../../resources/icons'

const ContactButton = () => (
  <LinkIconButton image={CHAT} text="Contact" scroll to="contact" />
)

export default ContactButton
