import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './Link'

storiesOf('Link', module)
  .add('Standard link', () => <Link to="#">Somewhere else</Link>)
  .add('Dark', () => (
    <Link to="#" dark>
      Somewhere else
    </Link>
  ))
