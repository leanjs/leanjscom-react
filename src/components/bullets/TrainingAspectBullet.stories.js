import React from 'react'
import { storiesOf } from '@storybook/react'
import TrainingAspectBullet from './TrainingAspectBullet'

storiesOf('TrainingAspectBullet', module)
  .add('Team', () => <TrainingAspectBullet image="team" />)
  .add('React', () => <TrainingAspectBullet image="react" />)
