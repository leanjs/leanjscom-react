import React from 'react';
import { storiesOf } from '@storybook/react';
import RebassTestCard from '../src/components/RebassTestCard';
import BenefitBullet from '../src/components/BenefitBullet';


storiesOf('RebassTestCard', module)
  .add('standard test card', () => (
    <RebassTestCard />
  ));

storiesOf('BenefitBullet', module)
  .add('basic bullet', () => (
    <BenefitBullet />
  ));