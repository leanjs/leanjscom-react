import React from 'react';
import { storiesOf } from '@storybook/react';
import ValueBullet from './ValueBullet';

storiesOf('ValueBullet', module)
  .add('Learning', () => (
    <ValueBullet image="learning" />
  ))
  .add('Caring', () => (
    <ValueBullet image="caring" />
  ))
  .add('People', () => (
    <ValueBullet image="people" />
  ))
