import React from 'react'
import { storiesOf } from '@storybook/react'
import BenefitBullet from './BenefitBullet'

storiesOf('BenefitBullet', module)
	.add('Quality', () => (
  		<BenefitBullet image="quality" />
	))
	.add('Cost effective', () => (
  		<BenefitBullet image="costeffective" />
	))
	.add('Quick', () => (
  		<BenefitBullet image="quick" />
	))
