import React from 'react'
import { storiesOf } from '@storybook/react'
import ActivityBullet, { validImages } from './ActivityBullet'
import { addStories } from '../../../.storybook/utils'

const stories = storiesOf('ActivityBullet', module)
addStories(validImages, image => <ActivityBullet image={image} />, stories)
