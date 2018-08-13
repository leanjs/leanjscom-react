import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'

storiesOf('Checkbox', module)
  .add('Checked', () => <Checkbox checked />)
  .add('Unchecked', () => <Checkbox />)
  .add('Alternative sizes', () => <Checkbox checked size={6} />)
  .add('Labelled', () => <Checkbox checked label="Option 1" />)
  .add('Labelled using React Element', () => (
    <Checkbox
      checked
      label={
        <div style={{ border: '1px solid blue', display: 'inline' }}>
          Option 1
        </div>
      }
    />
  ))
