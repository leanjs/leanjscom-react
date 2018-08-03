import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ActivityBullet from '../components/bullets/ActivityBullet'
import ValueBullet from '../components/bullets/ValueBullet'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE } from '../config/styles'
import Button from '../components/buttons/Button'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'

const TitleText = styled(P)`
  font-size: 24px;
`

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
              We build badass and scalable websites, apps &amp; digital
              solutions…
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
        <Row>
          <Col md={5}>
            <Button fullWidth hasArrows dark>
              Read case studies
            </Button>
          </Col>
          <Col md={5}>
            <Button fullWidth hasArrows>
              Working with you
            </Button>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section xsBgDark>
      <Grid>
        <Row>
          <H2>We care about you and your people. We value good ethics.</H2>
          <P>
            Whoa, that sounds heavy… Thing is, we have lofty ambitions and want
            to do <br /> ‘good’ in the world through our work and actions.
          </P>
        </Row>
        <Row>
          <TitleText>Our core values</TitleText>
        </Row>
        <Row>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<ValueBullet image="learning" />}
              sentence="Be unafraid to learn from everyone and believe in teaching what we know"
            />
          </Col>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<ValueBullet image="caring" />}
              sentence="Always aim to treat others how we would want to be treated"
            />
          </Col>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<ValueBullet image="people" />}
              sentence="Ensure what we do is meaningful and always people-centred"
            />
          </Col>
        </Row>
        <Row>
          <Button hasArrows>Our team and principles</Button>
        </Row>
        <Row>
          <Col center xs={12}>
            LARGE IMAGE HERE
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <H2>What we do, how we do it</H2>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
