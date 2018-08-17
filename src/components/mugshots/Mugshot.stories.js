import React from 'react'
import { storiesOf } from '@storybook/react'
import Mugshot from './Mugshot'
import { MUGSHOT_JAMES_NORTON } from '../../config/images'
import { WHITE, DARKGREY } from '../../config/styles'

storiesOf('Mugshot', module)
  .add('Name and job title', () => (
    <Mugshot
      image={MUGSHOT_JAMES_NORTON}
      name="James Norton"
      jobTitle="Engineering Practise Lead"
      company="ASOS.com"
      color={WHITE}
    />
  ))
  .add('Name and job title (dark text)', () => (
    <Mugshot
      image={MUGSHOT_JAMES_NORTON}
      name="James Norton"
      jobTitle="Engineering Practise Lead"
      company="ASOS.com"
      color={DARKGREY}
    />
  ))
