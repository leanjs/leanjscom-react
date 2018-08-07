import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkButton from './LinkButton'

storiesOf('LinkButton', module)
  .add('Light background', () => <LinkButton>Click me</LinkButton>)
  .add('Dark background', () => <LinkButton dark>Click me</LinkButton>)
  .add('With arrows', () => (
    <LinkButton hasArrows>Building products</LinkButton>
  ))
  .add('External link', () => (
    <LinkButton external to="http://www.example.com">
      Example.com
    </LinkButton>
  ))
