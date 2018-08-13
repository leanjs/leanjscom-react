import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'

const teamLinks = [
  {
    text: 'Our values',
    to: 'ourValues',
  },
  {
    text: 'Not-for-profit discounts',
    to: 'notForProfitDiscounts',
  },
  {
    text: 'Our team members',
    to: 'teamMembers',
  },
]

const Team = () => (
  <React.Fragment>
    <Header
      titleLines={['Our team & principles']}
      links={teamLinks}
      bgImg="home"
    />
  </React.Fragment>
)

export default Team
