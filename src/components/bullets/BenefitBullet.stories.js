import React from 'react'
import { storiesOf } from '@storybook/react'
import BenefitBullet, { validImages } from './BenefitBullet'
import { addStories } from './Bullet'

const stories = storiesOf('BenefitBullet', module)
addStories(BenefitBullet, validImages, stories)
