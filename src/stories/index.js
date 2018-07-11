import React from 'react';
import { storiesOf } from '@storybook/react';
import BenefitBullet from '../components/bullets/BenefitBullet';
import ValueBullet from '../components/bullets/ValueBullet';
import LeanJS from '../components/icons/LeanJS';


storiesOf('BenefitBullet', module)
  .add('Tools', () => (
    <BenefitBullet image="tools" />
  ))
  .add('Teaching', () => (
    <BenefitBullet image="teaching" />
  ))

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

storiesOf('LeanJSLogo', module)
  .add('Standard logo', () => (
    <LeanJS />
  ))
