import React from 'react'
import { storiesOf } from '@storybook/react'
import ActivityBullet from './ActivityBullet'

storiesOf('ActivityBullet', module)
  .add('Development', () => <ActivityBullet image="development" />)
  .add('Teaching', () => <ActivityBullet image="teaching" />)