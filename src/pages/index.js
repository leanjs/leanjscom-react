import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ActivityBullet from '../components/bullets/ActivityBullet'
import ValueBullet from '../components/bullets/ValueBullet'
import BenefitBullet from '../components/bullets/BenefitBullet'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE } from '../config/styles'
import Button from '../components/buttons/Button'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Iteration from '../components/graphics/Iteration'

const TitleText = styled(P)`
  font-size: 24px;
`
const InlineItems = styled.div`
  padding-left: 50px;
`

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="We can help you evolve your <br /> tech. Quick snap!"
      bgImg="home"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="development" />}
                sentence="We build badass and scalable websites, apps & digital solutions…"
              />
            </Li>
          </Ul>
          <Button hasArrows>Building products</Button>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="teaching" />}
                sentence="  We also teach innovative tech to your team…"
              />
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
            <br />
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
        <P>
          We work exclusivity in the iterative, incremental ‘Lean’ way (thus the
          name!). This ensures:
        </P>
        <br />
        <Row>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<BenefitBullet image="quality" />}
              sentence="A process that ensures quality is baked in"
            />
          </Col>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<BenefitBullet image="costeffective" />}
              sentence="Cost effective, tested solutions that you can build upon"
            />
          </Col>
          <Col md={4}>
            <SmallIconAndSentence
              icon={<BenefitBullet image="quick" />}
              sentence="Very quick turnarounds"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={8}>
            <TitleText>Here's how:</TitleText>
            <br />
            <Iteration />
          </Col>
          <Col md={4}>
            <Line verticalCenter lineWidth={40}>
              Learn...
            </Line>
            <InlineItems>
              User research, business analysis, competitor audit
              <Button hasArrows>UX & design services</Button>
            </InlineItems>
            <Line verticalCenter lineWidth={40}>
              Build...
            </Line>
            <InlineItems>
              Prototyping, coding and development
              <Button hasArrows>Development services</Button>
            </InlineItems>
            <Line verticalCenter lineWidth={40}>
              Test...
            </Line>
            <InlineItems>
              Usability testing, quality assurance
              <Button hasArrows>UX & design services</Button>
            </InlineItems>
            <Button hasArrows dark fullWidth>
              Working with you
            </Button>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
