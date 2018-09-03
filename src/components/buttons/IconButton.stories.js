import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconButton, LinkIconButton } from './IconButton'
import { QUALITY as ICON } from '../../resources/icons'

storiesOf('IconButton', module)
  .add('Button', () => <IconButton image={ICON} text="Click" />)
  .add('Link', () => <LinkIconButton image={ICON} text="Click" />)
