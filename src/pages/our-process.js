import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY, SPACING_LARGE } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, MVPLink } from '../components/text'
import Hr from '../components/decoration/Hr'
import HighlightedItem from '../components/decoration/HighlightedItem'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import Line from '../components/sections/Line'
import Indented from '../components/sections/Indented'
import { RICHARD_TEACHING, ITERATION_DIAGRAM } from '../config/images'

const HowItWorks = props =>
  props.sections.map((section, j) => (
    <React.Fragment key={`howitworks-${j}`}>
      <Line>
        {section.heading}
        {section.points.map((point, i) => (
          <SmallIconAndSentence
            icon={<BenefitBullet image={point.icon} />}
            sentence={point.sentence}
            key={`howitworks-icons-and-sentences-${i}`}
            flushLeft
          />
        ))}
        {section.button ? (
          <P>
            <LinkButton to={section.button.to} hasArrows>
              {section.button.text}
            </LinkButton>
          </P>
        ) : null}
      </Line>
    </React.Fragment>
  ))

const FAQs = styled.div`
  padding: ${SPACING_LARGE} ${SPACING_LARGE} 0 ${SPACING_LARGE};
`
const FAQ = styled.div`
  padding-bottom: ${SPACING_LARGE};
`

const OurProcess = () => (
  <React.Fragment>
    <Header
      titleLines={['Our process']}
      links={[
        {
          text: "What is 'Lean'?",
          to: 'whatIsLean',
        },
        {
          text: 'Our lean process',
          to: 'ourLeanProcess',
        },
        {
          text: 'How long it takes',
          to: 'howLongItTakes',
        },
        {
          text: ['What is an MVP?'],
          to: 'mvp',
        },
        {
          text: 'Applying Lean to training',
          to: 'applyingLeanToTraining',
        },
      ]}
      bulletPoints={[
        {
          icon: 'qa',
          sentence:
            'A process that ensures quality is assured and creates trusted, scalable digital products',
        },
        {
          icon: 'quick',
          sentence: 'From concept to launch - in as little as 6 weeks',
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col md={8}>
            <a name="whatIsLean" />
            <H2>Working lean, reducing waste - rapidly</H2>
            <P>
              You’re probably thinking, what IS Lean? For that matter, you
              may’ve heard of Agile too and thought the same… So, what is all
              this jargon about?
            </P>
            <P>
              Lean/Agile is like cooking. You add ingredients, taste, learn and
              experiment with flavours as you go. You find and use what works
              great and reject what tastes bad.
            </P>
            <P>
              You wouldn’t serve something to your guests without tasting now
              would you?!
            </P>
            <P>
              <LinkButton to="/training" hasArrows>
                Looking for Lean / Agile training? We can do that
              </LinkButton>
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a name="ourLeanProcess" />
            <H2>How this works at LeanJS</H2>
            <Image src={ITERATION_DIAGRAM} />
          </Col>
          <Col md={6}>
            <HowItWorks
              sections={[
                {
                  heading: 'Learn',
                  points: [
                    {
                      sentence:
                        'We take time talking with you  and your team, gauging expectations and business needs',
                      icon: 'business_needs',
                    },
                    {
                      sentence:
                        'Speak to users to their core needs and ensure we prioritise how they think',
                      icon: 'chat',
                    },
                    {
                      sentence:
                        'Look at competitors in the market, and outside your sector, to evaluate how to differentiate your digital solution',
                      icon: 'competitors',
                    },
                  ],
                },

                {
                  heading: 'Build',
                  points: [
                    {
                      sentence: [
                        'We start ‘low-fi’ so we can test the core functionality and content against user needs as soon as humanly possible. Minimum viable products (',
                        <MVPLink key={`lofimvp-${new Date().getTime()}`} />,
                        's) first, always.',
                      ],
                      icon: 'start_small',
                    },
                    {
                      sentence: [
                        'Design, development and accessibility best practices are baked in to ensure future-friendly ',
                        <MVPLink
                          key={`bestpractisemvp-${new Date().getTime()}`}
                        />,
                        's that you (with our help or not) can take further into the  future.',
                      ],
                      icon: 'quality',
                    },
                    {
                      sentence:
                        'Under the hood, we use the latest ReactJS ecosystem technologies. It’s stable, quick to iterate upon and future proof.',
                      icon: 'react',
                    },
                  ],
                },

                {
                  heading: 'Test',
                  points: [
                    {
                      sentence:
                        'We put digital solutions in front of target users as early as possible. As soon as we have a working prototype, we test.',
                      icon: 'holding_mobile',
                    },
                    {
                      sentence:
                        'We actually watch and speak with users in our tests. Qualitative insight helps us understand exactly how people use digital products.',
                      icon: 'eye',
                    },
                    {
                      sentence: [
                        'Quality assurance (QA) is essential for such innovative technologies. We run a myriad of real-world tests to make sure your ',
                        <MVPLink key={`qamvp-${new Date().getTime()}`} />,
                        ' wont break.',
                      ],
                      icon: 'tick_badge',
                    },
                  ],
                  button: {
                    text: 'Read our case studies',
                    to: '/case-studies',
                  },
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={1} />
          <Col md={10}>
            <HighlightedItem>
              <FAQs>
                <FAQ>
                  <a name="howLongItTakes" />
                  <H2>Whoa there... How long does that take?</H2>
                  <P>
                    It sounds a lot, we know. However, this process can take as
                    little as 6 weeks
                  </P>
                  <P>
                    Imagine - a fully formed, tested and proven <MVPLink />{' '}
                    ready to take into the future in only a fraction of the time
                    it may've taken in the past
                  </P>
                  <P>
                    <LinkButton to="/case-studies" hasArrows>
                      Case studies
                    </LinkButton>
                  </P>
                </FAQ>

                <FAQ>
                  <a name="mvp" />
                  <H2>MVP? What does that mean?</H2>
                  <P>
                    A minimum viable product (MVP) is a digital product that has
                    only the core features that a user needs to complete their
                    customer journey.
                  </P>
                  <P>
                    That goal is decided from user and business research with
                    both party’s needs considered.
                  </P>
                  <P>
                    Starting with an MVP means that we can build from the ground
                    upwards. This can apply to new and legacy products as well
                    as we can work iteratively from an existing feature/product.
                    Simple!
                  </P>
                  <P>
                    <LinkButton to="/building-solutions" hasArrows>
                      Learn more about our design services
                    </LinkButton>
                  </P>
                </FAQ>
              </FAQs>
            </HighlightedItem>
          </Col>
          <Col md={1} />
        </Row>
      </Grid>
    </Section>

    <Section dark lastOnPage>
      <Grid>
        <Row>
          <Col md={8}>
            <a name="applyingLeanToTraining" />
            <H2>Applying our process to training as well as products</H2>
            <P>
              We don’t just apply our process to our product builds, but to our
              training too!
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <P>
              <img src={RICHARD_TEACHING} />
            </P>
          </Col>
          <Col md={6}>
            <Line>
              Learn
              <P>
                Trainers are builders, searching for and implementing the latest
                methods and tech. Both in personal and client projects. We’re
                constantly learning too!
              </P>
            </Line>

            <Line>
              Build
              <P>
                We create and add to our curriculum when research shows to do
                so. We also creating ‘MVP’ meetups to give us a basis on which
                to test effectiveness/need
              </P>
            </Line>

            <Line>
              Test
              <P>
                Students and coaches provide us with essential qualitiative
                feedback on all trainings
              </P>
            </Line>

            <Indented>
              <P>
                <LinkButton to="/training" hasArrows>
                  Read more about our training
                </LinkButton>
              </P>
            </Indented>
          </Col>
        </Row>
        <Row lastOnPage>
          <Col>
            <Hr />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default OurProcess
