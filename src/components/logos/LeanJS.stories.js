import React from 'react';
import { storiesOf } from '@storybook/react';
import LeanJS from './LeanJS';

storiesOf('LeanJS Logo', module)
  .add('Standard logo', () => (
    <LeanJS />
  ))
  .add('Different colours', () => (
    <LeanJS color="#f8f5e3" />
  ))
