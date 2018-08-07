import React from 'react'
import { storiesOf } from '@storybook/react'
import Mugshot from './Mugshot'
import { WHITE, DARKGREY } from '../../config/styles'

storiesOf('Mugshot', module)
  .add('Name and job title', () => (
    <Mugshot
      image="james-norton-asos"
      name="James Norton"
      jobTitle="Engineering Practise Lead"
      company="ASOS.com"
      color={WHITE}
    />
  ))
  .add('Name and job title (dark text)', () => (
    <Mugshot
      image="james-norton-asos"
      name="James Norton"
      jobTitle="Engineering Practise Lead"
      company="ASOS.com"
      color={DARKGREY}
    />
  ))
