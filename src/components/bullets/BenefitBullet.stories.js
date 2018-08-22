import React from 'react'
import { storiesOf } from '@storybook/react'
import BenefitBullet, { validImages } from './BenefitBullet'

const stories = storiesOf('BenefitBullet', module)
Object.keys(validImages).reduce(
  (agg, cur) => agg.add(cur, () => <BenefitBullet image={cur} />),
  stories
)
