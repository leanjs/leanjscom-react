import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { Provider } from "rebass";
import { injectGlobal } from 'styled-components'

// Include App CSS here to ensure it shows up in stories
import '../src/layouts/index.css'

// Inject global styles required by Rebass
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

// Add Rebass to storybook
const ThemeDecorator = storyFn => <Provider>{storyFn()}</Provider>;
addDecorator(ThemeDecorator);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);