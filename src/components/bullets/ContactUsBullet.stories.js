import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactUsBullet from './ContactUsBullet'

storiesOf('ContactUsBullet', module)
  .add('Phone', () => <ContactUsBullet image="phone" />)
  .add('Email', () => <ContactUsBullet image="email" />)
  .add('Twitter', () => <ContactUsBullet image="twitter" />)
  .add('Instagram', () => <ContactUsBullet image="instagram" />)
  .add('Hangouts', () => <ContactUsBullet image="hangouts" />)
  .add('Office', () => <ContactUsBullet image="office" />)
