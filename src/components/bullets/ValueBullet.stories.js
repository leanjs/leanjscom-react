import React from 'react'
import { storiesOf } from '@storybook/react'
import ValueBullet, { validImages } from './ValueBullet'

const stories = storiesOf('ValueBullet', module)
Object.keys(validImages).reduce(
  (agg, cur) => agg.add(cur, () => <ValueBullet image={cur} />),
  stories
)
