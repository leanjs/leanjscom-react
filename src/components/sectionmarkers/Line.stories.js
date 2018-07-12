import React from 'react'
import { storiesOf } from '@storybook/react'
import Line from './Line'

storiesOf('Section marker line', module)
	.add('Vertical center', () => (
  		<Line verticalCenter>Section contents</Line>
	))
	.add('Vertical top', () => (
  		<Line>Section contents</Line>
	))
	.add('Wider', () => (
  		<Line verticalCenter lineWidth={100}>Section contents</Line>
	))
