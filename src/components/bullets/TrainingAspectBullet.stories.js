import React from 'react'
import { storiesOf } from '@storybook/react'
import TrainingAspectBullet from './TrainingAspectBullet'

storiesOf('TrainingAspectBullet', module)
  .add('Team', () => <TrainingAspectBullet image="team" />)
  .add('React', () => <TrainingAspectBullet image="react" />)
  .add('Globe', () => <TrainingAspectBullet image="globe" />)
  .add('Dark styles', () => <TrainingAspectBullet image="react" dark />)
