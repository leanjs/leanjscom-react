import React from 'react'
import { storiesOf } from '@storybook/react'
import ValueBullet, { validImages } from './ValueBullet'
import { addStories } from './Bullet'

const stories = storiesOf('ValueBullet', module)
addStories(ValueBullet, validImages, stories)
