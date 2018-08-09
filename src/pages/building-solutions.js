import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import BenefitBullet from '../components/bullets/BenefitBullet'
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

    <Section>
      <Row>
        <Col>
          <H2>Working in collaboration with YOU</H2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <P>
            We know how painful digital projects can be. Our team have many
            years experience in digital and have developed a process that works
            with you - from beginning to end.
          </P>
        </Col>
        <Col md={6}>
          <Image src={'https://picsum.photos/300/200/?random'} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="chat" />}
            sentence="Be unafraid to learn from everyone and believe in teaching what we know"
          />
        </Col>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="gift" />}
            sentence="Explain all possibilities with you and collaborate to prioritise the best solutions"
          />
        </Col>
        <Col md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="calendar" />}
            sentence="Bi-weekly reviews throughout the design and build process"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <P quote>
            “We never thought it possible! We only had a couple of months until
            Christmas but LeanJS sorted us out.
          </P>
          <P quote>
            They were highly professional yet friendly and very effective.”
          </P>
        </Col>
      </Row>
    </Section>

    <Section xsBgDark />

    <Section />
  </React.Fragment>
)

export default BuildingSolutions
