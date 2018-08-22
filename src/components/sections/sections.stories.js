import React from 'react'
import { storiesOf } from '@storybook/react'
import Line from './Line'
import Indented from './Indented'

storiesOf('Sections', module)
  .add('Line', () => <Line>Section contents</Line>)
  .add('Line (vertical center)', () => (
    <Line verticalCenter>
      <p>Section contents para</p>
      <p>Section contents para</p>
      <p>Section contents para</p>
      <p>Section contents para</p>
    </Line>
  ))
  .add('Line (wide)', () => <Line wide>Section contents</Line>)
  .add('Indented', () => <Indented>Section contents</Indented>)
  .add('Indented (wide)', () => <Indented wide>Section contents</Indented>)
