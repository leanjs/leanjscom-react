import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import SmallIconAndSentences from '../components/bulletedsections/SmallIconAndSentences'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import {
  MUGSHOT_ABINBEV,
  ALEX_RICARDO_WHITEBOARD,
  RICHARD_TEACHING,
  LUIS_ALEX_DOG,
} from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Blockquote2 } from '../components/text'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'

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
      bulletPoints={[
        {
          icon: 'heart',
          sentence:
            'We work with you from initial idea to product launch and beyond!',
        },
        {
          icon: 'diamond',
          sentence:
            'Design + development process for quality results, on time and on budget',
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col>
            <a name="workingWithYou" />
            <H2>Working in collaboration with YOU</H2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <P>
              We know how painful digital projects can be. Our team have many
              years experience in digital and have developed a process that
              works with you - from beginning to end.
            </P>
            <SmallIconAndSentences
              flushLeft
              bulletType={BenefitBullet}
              items={[
                {
                  image: 'chat',
                  sentence:
                    'Be unafraid to learn from everyone and believe in teaching what we know',
                },
                {
                  image: 'gift',
                  sentence:
                    'Explain all possibilities with you and collaborate to prioritise the best solutions',
                },
                {
                  image: 'calendar',
                  sentence:
                    'Bi-weekly reviews throughout the design and build process',
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            {/* <Mugshot
              image={MUGSHOT_ABINBEV}
              name="Mertens Dries"
              jobTitle="Head of Marketing at Saveur Bière (ABinBev)"
              company="ABinBev"
              color={DARKGREY}
              quote="We never thought it possible! We only had a couple of months until Christmas but LeanJS sorted us out. They were highly professional yet friendly and very effective."
            /> */}
          </Col>
          <Col md={6}>
            <LinkButton to="/case-studies" dark hasArrows>
              Read our case studies
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark>
      <Grid>
        <Row>
          <Col md={6}>
            <a name="projectHandovers" />
            <H2>Slick handovers with expert tech training</H2>

            <P>
              Anyone who’s completed a digital project knows how important a
              good handover is.
            </P>
            <P>
              That’s why we don’t just build but train too. This means that when
              it comes to a product handover, we’re there for you and your team.
            </P>
            <P>We can provide training for:</P>
            <Ul>
              <Li>The ReactJS ecosystem</Li>
              <Li>Working with GraphQL</Li>
              <Li>Lean/Agile processes</Li>
              <Li>Product & UX design</Li>
            </Ul>
          </Col>
          <Col md={6}>
            <Image src={RICHARD_TEACHING} />
          </Col>
        </Row>

        <Row>
          <Col>
            <LinkButton to="/training" hasArrows>
              Find out more about our training
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Col md={6}>
            <a name="support" />
            <H2>What happens next? How we support you…</H2>

            <P>
              Building a website or app is scary - we get it. But sometimes the
              real challenges start once the project is launched and live.
            </P>
            <P>
              That’s why we promise that you wont be left in the lurch, we’ll be
              there to help you as much as you require. We wont dump you in it
              at the end of the project!
            </P>

            <SmallIconAndSentences
              flushLeft
              bulletType={BenefitBullet}
              items={[
                {
                  image: 'tools',
                  sentence: 'Tailored, bespoke support packages',
                },
                {
                  image: 'code',
                  sentence:
                    'Proven, open sourced tech-stack under the hood that gives your team total flexibility',
                },
                {
                  image: 'expand',
                  sentence:
                    'Robust, scalable technology that will live far into the future',
                },
              ]}
            />
          </Col>

          <Col md={6}>
            <Image src={LUIS_ALEX_DOG} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinkButton dark hasArrows to="/case-studies">
              Read our case studies
            </LinkButton>
            <LinkButton scroll hasArrows to="contact">
              Contact us to discuss your needs
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default BuildingSolutions
