import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import CaseStudyExpoBullets from '../components/bullets/CaseStudyExpoBullets'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import caseStudies from '../components/caseStudies.json'

const BuildingSolutionsLinks = [
  {
    text: 'Working with you',
    to: 'workingWithYou',
  },
  {
    text: 'Project handovers',
    to: 'projectHandovers',
  },
  {
    text: 'Support going forward',
    to: 'support',
  },
]

const BuildingSolutions = () => (
  <React.Fragment>
    <Header
      titleLines={['Building solutions']}
      links={BuildingSolutionsLinks}
      bgImg="home"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="heart" />}
                sentence="We work with you from initial idea to product launch and beyond!"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="diamond" />}
                sentence="Design + development process for quality results, on time and on budget"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>
  </React.Fragment>
)

export default BuildingSolutions
