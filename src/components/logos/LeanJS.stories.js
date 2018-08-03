import React from 'react'
import { storiesOf } from '@storybook/react'
import { LeanJSLogo } from './LeanJS'

storiesOf('LeanJS Logo', module)
  .add('Standard logo', () => <LeanJSLogo />)
  .add('Different colours', () => <LeanJSLogo color="#f8f5e3" />)
