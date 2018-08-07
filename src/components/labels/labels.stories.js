import React from 'react'
import { storiesOf } from '@storybook/react'
import { Topic } from './Topic'

import { LIGHTGREY } from '../../config/styles'

storiesOf('Labels', module)
  .add('Topic', () => <Topic type="code" />)
  .add('Topic (different colours)', () => (
    <Topic type="code" color={LIGHTGREY} />
  ))
