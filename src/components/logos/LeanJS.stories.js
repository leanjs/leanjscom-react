import React from 'react';
import { storiesOf } from '@storybook/react';
import LeanJS from './LeanJS';

storiesOf('LeanJSLogo', module)
  .add('Standard logo', () => (
    <LeanJS />
  ))
