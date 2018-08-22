import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import backgroundColor from 'react-storybook-decorator-background'

// Include App CSS here to ensure it shows up in stories
import '../src/layouts/index.css'

// Set background colour
addDecorator(backgroundColor(['#2b2b2b', '#ffffff']))

// Load stories dynamically
const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
