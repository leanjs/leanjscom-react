import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactUsBullet, { validImages } from './ContactUsBullet'

const stories = storiesOf('ContactUsBullet', module)
Object.keys(validImages).reduce(
  (agg, cur) => agg.add(cur, () => <ContactUsBullet image={cur} />),
  stories
)
