import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'

storiesOf('Checkbox', module)
  .add('Checked', () => <Checkbox checked />)
  .add('Unchecked', () => <Checkbox />)
  .add('Alternative sizes', () => <Checkbox checked size={6} />)
