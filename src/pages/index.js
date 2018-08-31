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
import SmallIconAndSentences from '../components/bulletedsections/SmallIconAndSentences'
import { WHITE, SPACING_LARGE, FONT_SIZE_LARGE } from '../config/styles'
import { TEAMWORK } from '../config/images'
import { ITERATION_DIAGRAM } from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3a, P, Strong } from '../components/text'
import Image from '../components/elements/Image'
import Instagram from '../components/feeds/Instagram'

const IterationStages = props => (
  <React.Fragment>
    {props.items.map((item, i) => (
      <Line key={`iterationstage-${i}`}>
        {item.title}
        <P>{item.description}</P>
        {item.button ? (
          <P>
            <LinkButton to={item.button.to} hasArrows>
              {item.button.text}
            </LinkButton>
          </P>
        ) : null}
      </Line>
    ))}
  </React.Fragment>
)

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="We can help you evolve your tech. Quick snap!"
      bulletPoints={[
        {
          icon: 'development',
          sentence:
            'We build badass and scalable websites, apps & digital solutions…',
          button: {
            to: '/building-solutions',
            text: 'Building products',
          },
        },
        {
          icon: 'teaching',
          sentence: 'We also teach innovative tech to your team…',
          button: {
            to: '/training',
            text: 'Training products',
          },
        },
      ]}
    />

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
          <Col md={6}>
            <Image src={TEAMWORK} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LinkButton to="/case-studies" hasArrows dark>
              Read case studies
            </LinkButton>
            <LinkButton to="/our-process" hasArrows>
              Working with you
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark>
      <Grid>
        <Row>
          <Col md={8}>
            <H2>We care about you and your people. We value good ethics.</H2>
            <P>
              Whoa, that sounds heavy… Thing is,{' '}
              <Strong>we have lofty ambitions and want to do ‘good’</Strong> in
              the world through our work and actions.
            </P>
          </Col>
        </Row>
        <Row>
          <Col>
            <H3a>Our core values</H3a>
          </Col>
        </Row>
        <Row>
          <SmallIconAndSentences
            wrapWithCols={true}
            bulletType={ValueBullet}
            items={[
              {
                image: 'learning',
                sentence:
                  'Be unafraid to learn from everyone and believe in teaching what we know',
              },
              {
                image: 'caring',
                sentence:
                  'Always aim to treat others how we would want to be treated',
              },
              {
                image: 'people',
                sentence:
                  'Ensure what we do is meaningful and always people-centred',
              },
            ]}
          />
        </Row>
        <Row>
          <Col>
            <LinkButton to="/team-principles" hasArrows>
              Our Team and Principles
            </LinkButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <Instagram />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Col>
          <H2>What we do, how we do it</H2>
          <P>
            We work exclusivity in the iterative, incremental ‘Lean’ way (thus
            the name!). This ensures:
          </P>
        </Col>
        <Row>
          <SmallIconAndSentences
            wrapWithCols={true}
            bulletType={BenefitBullet}
            items={[
              {
                image: 'quality',
                sentence: 'A process that ensures quality is baked in',
              },
              {
                image: 'costeffective',
                sentence:
                  'Cost effective, tested solutions that you can build upon',
              },
              {
                image: 'quick',
                sentence: 'Very quick turnarounds',
              },
            ]}
          />
        </Row>
        <Row>
          <Col md={8}>
            <H3a>Here's how:</H3a>
            <Image src={ITERATION_DIAGRAM} />
          </Col>
          <Col md={4}>
            <IterationStages
              items={[
                {
                  title: 'Learn...',
                  description:
                    'User research, business analysis, competitor audit',
                },
                {
                  title: 'Build...',
                  description: 'Prototyping, coding and development',
                },
                {
                  title: 'Test...',
                  description: 'Usability testing, quality assurance',
                },
              ]}
            />
            <LinkButton to="/building-solutions" hasArrows dark>
              Working with you
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
