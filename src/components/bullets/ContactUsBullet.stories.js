import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactUsBullet, { validImages } from './ContactUsBullet'
import { addStories } from '../../../.storybook/utils'

const stories = storiesOf('ContactUsBullet', module)
addStories(validImages, image => <ContactUsBullet image={image} />, stories)
