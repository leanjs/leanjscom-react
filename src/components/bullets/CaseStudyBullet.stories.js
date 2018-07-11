import React from 'react';
import { storiesOf } from '@storybook/react';
import CaseStudyBullet from './CaseStudyBullet';

storiesOf('CaseStudyBullet', module)
  .add('ABinBev', () => (
    <CaseStudyBullet image="abinbev" />
  ))
  .add('Boston University', () => (
    <CaseStudyBullet image="bostonuniversity" />
  ))
  .add('ASOS', () => (
    <CaseStudyBullet image="asos" />
  ))
