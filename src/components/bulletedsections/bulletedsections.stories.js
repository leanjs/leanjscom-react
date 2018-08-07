import React from 'react'
import { storiesOf } from '@storybook/react'

import LargeIconAndPoints from './LargeIconAndPoints'
import SmallIconAndSentence from './SmallIconAndSentence'

import { WHITE, DARKGREY } from '../../config/styles'

import ValueBullet from '../bullets/ValueBullet'

storiesOf('Bulleted sections', module)
  .add('Large icon and points', () => (
    <LargeIconAndPoints
      image="abinbev"
      points={['Rapid app design and build', '6 week turnaround']}
      color={WHITE}
    />
  ))
  .add('Large icon and points (dark text)', () => (
    <LargeIconAndPoints
      image="abinbev"
      points={['Rapid app design and build', '6 week turnaround']}
      color={DARKGREY}
    />
  ))
  .add('Small icon and sentence', () => (
    <SmallIconAndSentence
      icon={<ValueBullet image="learning" />}
      sentence="Be unafraid to learn from everyone and believe in teaching what we know"
    />
  ))
