import React from 'react';
import { storiesOf } from '@storybook/react';
import BenefitBullet from './BenefitBullet';

storiesOf('BenefitBullet', module)
  .add('Tools', () => (
    <BenefitBullet image="tools" />
  ))
  .add('Teaching', () => (
    <BenefitBullet image="teaching" />
  ))
