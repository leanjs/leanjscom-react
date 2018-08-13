import React from 'react'
import { storiesOf } from '@storybook/react'
import BenefitBullet from './BenefitBullet'

storiesOf('BenefitBullet', module)
  .add('Quality', () => <BenefitBullet image="quality" />)
  .add('Cost effective', () => <BenefitBullet image="costeffective" />)
  .add('Quick', () => <BenefitBullet image="quick" />)
  .add('Chat', () => <BenefitBullet image="chat" />)
  .add('Gift', () => <BenefitBullet image="gift" />)
  .add('Calendar', () => <BenefitBullet image="calendar" />)
