import React from 'react'
import { storiesOf } from '@storybook/react'
import CaseStudyBullet, { validImages } from './CaseStudyBullet'

const stories = storiesOf('CaseStudyBullet', module)
Object.keys(validImages).reduce(
  (agg, cur) => agg.add(cur, () => <CaseStudyBullet image={cur} />),
  stories
)
