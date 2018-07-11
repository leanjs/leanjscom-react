import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from "rebass"
import { injectGlobal } from 'styled-components'
import theme, { globalStyles } from '../src/layouts/rebass-theme'
import backgroundColor from 'react-storybook-decorator-background'

// Include App CSS here to ensure it shows up in stories
import '../src/layouts/index.css'

// Inject global styles required by Rebass
injectGlobal(globalStyles)

// Add Rebass to storybook
const ThemeDecorator = storyFn => <Provider theme={theme}>{storyFn()}</Provider>
addDecorator(ThemeDecorator)

// Set background colour
addDecorator(backgroundColor(['#2b2b2b']))

// Load stories dynamically
const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)