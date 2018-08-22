import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconButton, LinkIconButton } from './IconButton'
import { CHAT } from '../../config/icons'

storiesOf('IconButton', module)
  .add('Basic', () => <IconButton image={CHAT} text="Contact" />)
  .add('Link', () => <LinkIconButton image={CHAT} text="Contact" />)
