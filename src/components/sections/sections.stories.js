import React from 'react'
import { storiesOf } from '@storybook/react'
import Line from './Line'

storiesOf('Sections', module)
  .add('Standard', () => <Line>Section contents</Line>)
  .add('Standard (vertical center)', () => (
    <Line verticalCenter>
      <p>Section contents para</p>
      <p>Section contents para</p>
      <p>Section contents para</p>
      <p>Section contents para</p>
    </Line>
  ))
  .add('Wide', () => <Line wide>Section contents</Line>)
