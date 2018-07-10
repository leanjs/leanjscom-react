import React from 'react';
import { storiesOf } from '@storybook/react';
import RebassTestCard from '../src/components/RebassTestCard';


storiesOf('RebassTestCard', module)
  .add('standard test card', () => (
    <RebassTestCard />
  ));  