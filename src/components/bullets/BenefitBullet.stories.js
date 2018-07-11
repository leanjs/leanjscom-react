import React from 'react';
import { storiesOf } from '@storybook/react';
import BenefitBullet from './BenefitBullet';

storiesOf('BenefitBullet', module)
  .add('Quality', () => (
    <BenefitBullet image="quality" />
  ))

