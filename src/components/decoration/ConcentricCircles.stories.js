import React from 'react'
import { storiesOf } from '@storybook/react'
import ConcentricCircles from './ConcentricCircles'

storiesOf('ConcentricCircles', module)
  .add('Basic', () => <ConcentricCircles />)
  .add('Different sizes', () => <ConcentricCircles size={520} />)
  .add('Different numbers of circles', () => (
    <ConcentricCircles numCircles={30} size={520} />
  ))
  .add('Different colours', () => <ConcentricCircles color="blue" size={520} />)
