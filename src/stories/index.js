import React from 'react';
import { storiesOf } from '@storybook/react';
import BenefitBullet from '../components/bullets/BenefitBullet';
import ValueBullet from '../components/bullets/ValueBullet';


storiesOf('BenefitBullet', module)
  .add('tools', () => (
    <BenefitBullet image="tools" />
  ))
  .add('teaching', () => (
    <BenefitBullet image="teaching" />
  ))

storiesOf('ValueBullet', module)
  .add('learning', () => (
    <ValueBullet image="learning" />
  ))
  .add('caring', () => (
    <ValueBullet image="caring" />
  ))
  .add('people', () => (
    <ValueBullet image="people" />
  ))
