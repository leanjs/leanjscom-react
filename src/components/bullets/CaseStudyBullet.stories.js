import React from 'react'
import { storiesOf } from '@storybook/react'
import CaseStudyBullet, { validImages } from './CaseStudyBullet'
import { addStories } from '../../../.storybook/utils'

const stories = storiesOf('CaseStudyBullet', module)
addStories(validImages, image => <CaseStudyBullet image={image} />, stories)
