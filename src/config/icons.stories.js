import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from './icons'
import { addStories } from '../../.storybook/utils'

const stories = storiesOf('Icons', module)
addStories(icons, iconName => <img src={icons[iconName]} />, stories)
