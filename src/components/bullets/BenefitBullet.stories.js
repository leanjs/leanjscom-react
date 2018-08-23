import React from 'react'
import { storiesOf } from '@storybook/react'
import BenefitBullet, { validImages } from './BenefitBullet'
import { addStories } from '../../../.storybook/utils'

const stories = storiesOf('BenefitBullet', module)
addStories(validImages, image => <BenefitBullet image={image} />, stories)
