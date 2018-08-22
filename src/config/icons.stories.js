import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from './icons'

const stories = storiesOf('Icons', module)
Object.keys(icons).reduce(
  (agg, cur) =>
    agg.add(cur, () => (
      <div style={{ background: 'gray', display: 'inline-block' }}>
        <img src={icons[cur]} />
      </div>
    )),
  stories
)