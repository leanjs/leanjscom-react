import React from 'react'
import { storiesOf } from '@storybook/react'
import Topic from './Topic'

import { LIGHTGREY } from '../../config/styles'

storiesOf('Labels', module)
  .add('Topic', () => <Topic>Code</Topic>)
  .add('Topic (different colours)', () => <Topic color={LIGHTGREY}>Code</Topic>)
