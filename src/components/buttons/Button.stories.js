import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('Light background', () => <Button>Click me</Button>)
  .add('Dark background', () => <Button dark>Click me</Button>)
  .add('With arrows', () => <Button hasArrows>Building products</Button>)
  .add('Full width', () => <Button fullWidth>Click me</Button>)
  .add('Full width on mobile', () => (
    <Button fullWidthOnMobile>Click me</Button>
  ))
