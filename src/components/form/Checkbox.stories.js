import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'

storiesOf('Checkbox', module)
  .add('Checked', () => <Checkbox checked />)
  .add('Unchecked', () => <Checkbox />)
  .add('Focus', () => (
    <form>
      <p>Tab through these fields to see the focus styles</p>
      <p>
        <input type="text" />
      </p>
      <p>
        <Checkbox />
      </p>
      <p>
        <Checkbox />
      </p>
      <p>
        <input type="text" />
      </p>
    </form>
  ))
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
