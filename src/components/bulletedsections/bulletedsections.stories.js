import React from 'react'
import { storiesOf } from '@storybook/react'

import LargeLogoAndPoints from './LargeLogoAndPoints'

storiesOf('Bulleted sections', module).add('Large logo and points', () => (
  <LargeLogoAndPoints
    image="abinbev"
    points={['Rapid app design and build', '6 week turnaround']}
  />
))
