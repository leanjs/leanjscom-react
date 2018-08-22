import React from 'react'
import { storiesOf } from '@storybook/react'
import CaseStudyBullet, { validImages } from './CaseStudyBullet'
import { addStories } from './Bullet'

const stories = storiesOf('CaseStudyBullet', module)
addStories(CaseStudyBullet, validImages, stories)
