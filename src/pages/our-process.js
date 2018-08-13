import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Iteration from '../components/graphics/Iteration'
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
import Line from '../components/sections/Line'

const OurProcessLinks = [
  {
    text: "What is 'Lean'?",
    to: '#whatislean',
  },
  {
    text: 'Our lean process',
    to: '#ourleanprocess',
  },
  {
    text: 'How long it takes',
    to: '#howlongittakes',
  },
  {
    text: 'What is an MVP?',
    to: '#whatisanmvp',
  },
  {
    text: 'Applying Lean to training',
    to: '#applyingleantotraining',
  },
]

const OurProcess = () => (
  <React.Fragment>
    <Header
      titleLines={['Our process']}
      links={OurProcessLinks}
      bgImg="ourprocess"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="qa" />}
                sentence="A process that ensures quality is assured and creates trusted, scalable digital products"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="quick" />}
                sentence="From concept to launch - in as little as 6 weeks"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>

    <Section>
      <Grid>
        <Row>
          <Col>
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
              <LinkButton to="/training" withArrows>
                Looking for Lean / Agile training? We can do that
              </LinkButton>
            </P>

            <H2>How this works at LeanJS</H2>
            <P>
              <Iteration />
            </P>

            <Line verticalCenter>Learn</Line>
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="We time talking with you  and your team, gauging expectations and business needs"
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="Speak to users to their core needs and ensure we prioritise how they think"
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="Look at competitors in the market, and outside your sector, to evaluate how to differentiate your digital solution"
            />
            <P>
              <LinkButton to="/building-solutions" withArrows>
                Learn more about our design services
              </LinkButton>
            </P>

            <Line verticalCenter>Build</Line>
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="We start ‘low-fi’ so we can test the core functionality and content against user needs as soon as humanly possible. Minimal viable products (MVPs) first, always."
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="Design, development and accessibility best practices are baked in to ensure future-friendly MVPs that you (with our help or not) can take further into the  future."
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="Under the hood, we use the latest ReactJS ecosystem technologies. It’s stable, quick to iterate upon and future proof."
            />
            <P>
              <LinkButton to="/building-solutions" withArrows>
                Learn more about our dev stack and build process
              </LinkButton>
            </P>

            <Line verticalCenter>Test</Line>
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="We put digital solutions in front of target users as early as possible. As soon as we have a working prototype, we test."
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="We actually watch and speak with users in our tests. Qualitative insight helps us understand exactly how people use digital products. "
            />
            <SmallIconAndSentence
              icon={<BenefitBullet image="chat" />}
              sentence="Quality assurance (QA) is essential for such innovative technologies. We run a myriad of real-world tests to make sure your MVP wont break."
            />
            <P>
              <LinkButton to="/building-solutions" withArrows dark>
                Read our case studies
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid border>
        <Row>
          <Col>
            <H2>
              Whoa there...<br />How long does that take?
            </H2>
            <P>
              It sounds a lot, we know. However, this process can take as little
              as 6 weeks
            </P>
            <P>
              Imagine - a fully formed, tested and proven MVP ready to take into
              the future in only a fraction of the time it may've taken in the
              past
            </P>
            <P>
              <LinkButton to="/case-studies" hasArrows>
                Case studies
              </LinkButton>
            </P>

            <H2>MVP? What does that mean?</H2>
            <P>
              A minimum viable product (MVP) is a digital product that has only
              the core features that a user needs to complete their customer
              journey.
            </P>
            <P>
              That goal is decided from user and business research with both
              party’s needs considered.
            </P>
            <P>
              Starting with an MVP means that we can build from the ground
              upwards. This can apply to new and legacy products as well as we
              can work iteratively from an existing feature/product. Simple!
            </P>
            <P>
              <LinkButton to="/building-solutions" hasArrows>
                Learn more about our design services
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section xsBgDark>
      <Grid>
        <Row>
          <Col>
            <H2>Applying our process to training as well as products</H2>
            <P>
              We don’t just apply our process to our product builds, but to our
              training too!
            </P>
            <P>TODO:WV:20180813:Photograph of Richard teaching</P>
            <Line>Learn</Line>
            <P>
              Trainers are builders, searching for and implementing the latest
              methods and tech. Both in personal and client projects. We’re
              constantly learning too!
            </P>
            <Line>Build</Line>
            <P>
              We create and add to our curriculum when research shows to do so.
              We also creating ‘MVP’ meetups to give us a basis on which to test
              effectiveness/need
            </P>
            <Line>Test</Line>
            <P>
              Students and coaches provide us with essential qualitiative
              feedback on all trainings
            </P>
            <P>
              <LinkButton to="/training" hasArrows>
                Read more about our training
              </LinkButton>
            </P>
            <P>TODO:WV:2018083:Grey horizontal line here</P>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default OurProcess
