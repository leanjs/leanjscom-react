import React from 'react'
import { storiesOf } from '@storybook/react'
import ActivityBullet, { validImages } from './ActivityBullet'

const stories = storiesOf('ActivityBullet', module)
Object.keys(validImages).reduce(
  (agg, cur) => agg.add(cur, () => <ActivityBullet image={cur} />),
  stories
)
