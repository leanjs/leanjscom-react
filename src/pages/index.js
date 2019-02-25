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
import {
  WHITE,
  SPACING_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_LOWERQUARTILE,
} from '../config/styles'
import { TEAMWORK } from '../resources/images'
import { ITERATION_DIAGRAM } from '../resources/images'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3a, H5, P, Strong, SupportingText } from '../components/text'
import Image from '../components/elements/Image'
import Instagram from '../components/feeds/Instagram'

const IterationStages = props => (
  <React.Fragment>
    {props.items.map((item, i) => (
      <Line key={`iterationstage-${i}`}>
        <H3a>{item.title}</H3a>
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

const Strike = styled.span`
  text-decoration: line-through;
`

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="Develop, evolve, grow - quick snap."
      bulletPoints={[
        {
          icon: 'development',
          sentence:
            'We help you advance innovative and scalable solutions - guiding you through the modern tech maze',
          button: {
            to: '/case-studies',
            text: 'Case studies',
          },
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <H2>Tech that starts small for a wider impact.</H2>
            <SupportingText>
              Using our proven methodology, we collaboratively tackle big
              problems and develop effective, tested solutions that align
              business needs to your users’ intent.
            </SupportingText>
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
                  image="fingopay"
                  heading="FingoPay"
                  points={[
                    'Biometric payment service',
                    'Onboarding app for unique finger scanning API',
                    '1-day rapid user research, prototyping and testing',
                    'React Native app creation in 2 weeks',
                  ]}
                />

                {/* TODO: WV:20190222: Add the whitespace properly */}
                <br />
              </Li>
              <Li>
                <LargeIconAndPoints
                  image="bostonuniversity"
                  heading="Boston University - AGNI"
                  points={[
                    'Highly regarded US-based literary publication ',
                    'Website magazine and blog',
                    'Full UX process, UI and React website',
                    'Migration 90,000+ pages',
                  ]}
                />
                <br />
              </Li>
              <Li>
                <LargeIconAndPoints
                  image="abinbev"
                  heading="ABInBev"
                  points={[
                    'World’s largest brewing company',
                    'Interactive festive app',
                    'Rapid, collaborative design and build',
                    '90% increase in shopping card value',
                  ]}
                />
              </Li>
            </Ul>
          </Col>
          <Col md={6}>
            <Image
              src={TEAMWORK}
              alt="The LeanJS team, happily discussing a digital project around laptops whilst enjoying a drink"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <LinkButton to="/case-studies" hasArrows dark>
              Read case studies
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark>
      <Grid>
        <Row>
          <Col md={12}>
            <H2>
              Your team of <Strike>experts</Strike> <Strike>teachers</Strike>{' '}
              guides.
            </H2>
            <SupportingText>
              Collaboration and guidance is pivotal to any project's success -
              so we welcome everyone into tech!
            </SupportingText>
          </Col>
          <Col md={7}>
            <P>
              Our cross-functional team knows how problematic digital projects
              can be. We evangelise communication across specialities through
              our expertise and experience as development and UX mentors.
            </P>
            <P>
              We created the first React training in Europe - ReactJS Academy,
              and continue to pioneer edtech with the launch of GraphQL
              University in 2019. Through them, we deliver advanced Corporate
              team training across the world, developing staff through the power
              of cutting-edge tech.
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
            <Instagram photosPerRow={6} />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Col>
          <H2>How our process works </H2>
        </Col>
        <Col>
          <SupportingText>
            Using proven techniques and scalable approaches, we work
            incrementally yet thoroughly.
          </SupportingText>
          <P>
            We only work in the iterative, ‘Lean’ way - thus the name! We start
            small, design and develop rapidly to collaboratively build products
            that scale effectively over time.
          </P>
          <P>
            This is not to say we don’t strive to understand the bigger picture
            - far from it - but to develop effectively and rapidly, we must
            prioritise effectively, start small and evolve from there.
          </P>
          <P>Our lean approach is:</P>
        </Col>
        <Row />
        <Row>
          <Col md={12}>
            <H3a>Our lean approach is:</H3a>
          </Col>
        </Row>
        <Row>
          <SmallIconAndSentences
            wrapWithCols={false}
            markupAsList={true}
            bulletType={BenefitBullet}
            items={[
              {
                image: 'quality',
                sentence: 'A process that ensures quality is baked in',
              },
              {
                image: 'costeffective',
                sentence: 'Cost effective solutions you can build upon',
              },
              {
                image: 'quick',
                sentence: 'Tested products with very quick turnarounds',
              },
            ]}
          />

          <Col md={6}>
            <Image
              src={ITERATION_DIAGRAM}
              alt="Three circles stating 'Test', 'Learn' and 'Build', each with an arrow pointing to the next, showing a circular motion of Lean production"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
