import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactUsBullet, { validImages } from './ContactUsBullet'
import { addStories } from './Bullet'

const stories = storiesOf('ContactUsBullet', module)
addStories(ContactUsBullet, validImages, stories)
