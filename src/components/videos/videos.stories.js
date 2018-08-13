import React from 'react'
import { storiesOf } from '@storybook/react'
import YouTube from './YouTube'

storiesOf('Videos', module).add('Youtube responsive width', () => (
  <YouTube url="https://www.youtube.com/embed/2-IPT7Plsfc" />
))
