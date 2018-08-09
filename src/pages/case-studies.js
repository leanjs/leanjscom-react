import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import ActivityBullet from '../components/bullets/ActivityBullet'
import ValueBullet from '../components/bullets/ValueBullet'
import BenefitBullet from '../components/bullets/BenefitBullet'
import Circle from '../components/elements/Circle'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Iteration from '../components/graphics/Iteration'
import CaseStudyExpoBullets from '../components/bullets/CaseStudyExpoBullets'
import Mugshot from '../components/mugshots/Mugshot'
import caseStudies from '../components/caseStudies.json'

const CaseStudies = () => (
  <React.Fragment>
    <Header
      titleLines={['Case Studies']}
      links={caseStudies.CaseStudyLinks}
      bgImg="home"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="industry" />}
                sentence="Digital solutions built and user tested for over 20+ sectors"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="teaching" />}
                sentence="Over 1500 training participants in just 2 years"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>
    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <H2>ABInBev</H2>
          </Col>
          <Col xs={6}>
            <Topic dark>app</Topic>
          </Col>
        </Row>
        <Row>
          <CaseStudyExpoBullets
            content={caseStudies.CaseStudyContent.ABInBev}
          />
        </Row>
        <Row>PIC HERE</Row>
        <Row>
          <Col>
            <P style={{ fontSize: '20px' }}>
              <i>
                “We never thought it possible! We only had a couple of months
                until Christmas but LeanJS sorted us out.
              </i>
            </P>
            <P style={{ fontSize: '20px' }}>
              <i>
                They were highly professional yet friendly and very effective.”
              </i>
            </P>
          </Col>
        </Row>
        <Row>
          <Mugshot
            image="james-norton-asos"
            name="Georgina Clarke"
            jobTitle="Account Manager ABinBev"
            company="ASOS.com"
            color={DARKGREY}
          />
        </Row>
        <Row>
          <LinkButton external to="https://medium.com/leanjs">
            Blog: How apps increase <br /> shopping value by 90%
          </LinkButton>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default CaseStudies
