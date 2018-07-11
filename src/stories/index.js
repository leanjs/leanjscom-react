import React from 'react';
import { storiesOf } from '@storybook/react';
import RebassTestCard from '../components/RebassTestCard';
import BenefitBullet from '../components/BenefitBullet';


storiesOf('RebassTestCard', module)
  .add('standard test card', () => (
    <RebassTestCard />
  ));

storiesOf('BenefitBullet', module)
  .add('tools', () => (
    <BenefitBullet image="tools" />
  ))
  .add('teaching', () => (
    <BenefitBullet image="teaching" />
  ));
