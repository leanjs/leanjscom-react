import React from 'react'
import { storiesOf } from '@storybook/react'
import ActivityBullet, { validImages } from './ActivityBullet'
import { addStories } from './Bullet'

const stories = storiesOf('ActivityBullet', module)
addStories(ActivityBullet, validImages, stories)
