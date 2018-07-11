import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Standard button', () => (
    <Button>Click me</Button>
  ))
  .add('With arrows', () => (
    <Button hasArrows>Building products</Button>
  ))
