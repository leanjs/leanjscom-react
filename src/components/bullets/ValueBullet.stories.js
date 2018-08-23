import React from 'react'
import { storiesOf } from '@storybook/react'
import ValueBullet, { validImages } from './ValueBullet'
import { addStories } from '../../../.storybook/utils'

const stories = storiesOf('ValueBullet', module)
addStories(validImages, image => <ValueBullet image={image} />, stories)
