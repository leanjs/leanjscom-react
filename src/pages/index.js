import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ActivityBullet from '../components/bullets/ActivityBullet'
import CaseStudyBullet from '../components/bullets/CaseStudyBullet'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import { WHITE } from '../config/styles'
import Button from '../components/buttons/Button'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="We can help you evolve your <br /> tech. Quick snap!"
      bgImg="home"
    >
      <Row>
        <Col md={4}>
          <Ul unstyled>
            <Li>
              <ActivityBullet image="development" />
              We build badass and scalable websites, apps & digital solutions…
            </Li>
          </Ul>
          <Button hasArrows>Building products</Button>
        </Col>
        <Col md={4}>
          <Ul unstyled>
            <Li>
              <ActivityBullet image="teaching" />
              We also teach innovative tech to your team…
            </Li>
          </Ul>
          <Button hasArrows>Training services</Button>
        </Col>
      </Row>
    </Header>
    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <H2>
              We grab your business needs, align them with users’ intent and
              cook up solutions in a matter of weeks. Boom.
            </H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <P>We’re not making it up… here’s some of our favourite work:</P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Ul unstyled>
              <Li>
                <LargeIconAndPoints
                  image="abinbev"
                  points={['Rapid app design and build', '6 week turnaround']}
                />
              </Li>
              <Li>
                <LargeIconAndPoints
                  image="bostonuniversity"
                  points={['Website redesign', '90,000 page migration']}
                />
              </Li>
              <Li>
                <LargeIconAndPoints
                  image="asos"
                  points={[
                    'Bespoke tech training',
                    'Increased productivity and compliance',
                  ]}
                />
              </Li>
            </Ul>
          </Col>
          <Col md={6}>pic here</Col>
        </Row>
      </Grid>
    </Section>
    <Section xsBgDark>
      We care about you and your people. We value good ethics.
    </Section>
    <Section>What we do, how we do it</Section>
  </React.Fragment>
)

export default IndexPage
