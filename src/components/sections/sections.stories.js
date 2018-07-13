import React from 'react'
import { storiesOf } from '@storybook/react'
import Line from './Line'

storiesOf('Sections', module)
  .add('Line center', () => <Line verticalCenter>Section contents</Line>)
  .add('Line top', () => <Line>Section contents</Line>)
  .add('Line wide', () => (
    <Line verticalCenter lineWidth={100}>
      Section contents
    </Line>
  ))
