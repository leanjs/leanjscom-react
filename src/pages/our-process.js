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

import ourProcess from '../content/ourProcess.json'

const OurProcess = () => (
  <React.Fragment>
    <Header
      titleLines={['Our process']}
      links={ourProcess.OurProcessLinks}
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

            {ourProcess.OurProcessContent.HowItWorks.map(section => (
              <React.Fragment>
                <Line verticalCenter>{section.heading}</Line>
                {section.sentences.map(sentence => (
                  <SmallIconAndSentence
                    icon={<BenefitBullet image="chat" />}
                    sentence={sentence}
                  />
                ))}
                <P>
                  <LinkButton to={section.button.to} withArrows>
                    {section.button.text}
                  </LinkButton>
                </P>
              </React.Fragment>
            ))}
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
