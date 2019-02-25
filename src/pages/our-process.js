import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import { WHITE, DARKGREY, LIGHTGREY, SPACING_MEDIUM } from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Link from '../components/navigation/Link'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3a, P, scalabilityLink, SupportingText } from '../components/text'
import Hr from '../components/decoration/Hr'
import HighlightedItem from '../components/decoration/HighlightedItem'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import Line from '../components/sections/Line'
import Indented from '../components/sections/Indented'
import {
  RICHARD_TEACHING,
  ITERATION_DIAGRAM,
  ALEX_TEACHING2,
  PAUL_POSTITS,
} from '../resources/images'

const FAQs = styled.div`
  padding: ${SPACING_MEDIUM} ${SPACING_MEDIUM} 0 ${SPACING_MEDIUM};
`
const FAQ = styled.div`
  padding-bottom: ${SPACING_MEDIUM};
`

const OurProcess = () => (
  <React.Fragment>
    <Header
      titleLines={['Our process']}
      subtitle="Our unique process utlises techniques and approaches that work - incrementally yet throroughly"
      links={[
        {
          text: 'Our lean approach',
          to: 'ourLeanApproach',
        },
        {
          text: 'Timeframes',
          to: 'timeframes',
        },
        {
          text: 'Scalability',
          to: 'scalability',
        },
        {
          text: 'Future friendliness and handover',
          to: 'futureFriendlinessAndHandover',
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <a name="ourLeanApproach" />
            <H2>Our lean approach</H2>
          </Col>
          <Col md={6}>
            <SupportingText>
              Everything we do is about efficiency - reducing business waste,
              rapidly
            </SupportingText>
            <P>
              Lean is like cooking with family... you try and add ingredients,
              taste, learn and experiment with flavours as you go - asking them
              to taste with you along the way. You quickly find what works great
              and immediately reject what tastes bad.
            </P>
            <P>
              The result? A delicious finished product that you can reproduce
              over and over, delighting your nearest and dearest with something
              they - and you - love.
            </P>
            <P>
              <LinkButton to="/contact" dark hasArrows>
                Contact
              </LinkButton>
            </P>
          </Col>
          <Col md={1} />
          <Col md={5}>
            <Image
              src={PAUL_POSTITS}
              alt="UX designer Paul, grouping post-it notes on a wall to find patterns"
            />
          </Col>
        </Row>
        <Row />
        <Row>
          <Col md={12}>
            <H2>Stages of the LeanJS process</H2>
          </Col>
          <Col md={7}>
            <LargeIconAndPoints
              heading="Learn..."
              points={[
                'Collaborative client workshops',
                'User research, identifying needs',
                'Competitor research',
                'Analysis of quantitative data',
              ]}
            />

            <LargeIconAndPoints
              heading="Build..."
              points={[
                'Strategy documentation',
                'ReactJS-coded, low fidelity prototyping',
                'Process creation and visualisation',
              ]}
            />

            <LargeIconAndPoints
              heading="Test..."
              points={[
                'Usability testing with the target audience',
                'Stringent React code review and testing',
                'Quantitative measurement',
              ]}
            />
          </Col>
          <Col md={5}>
            <Image
              src={ITERATION_DIAGRAM}
              alt="Three circles stating 'Test', 'Learn' and 'Build', each with an arrow pointing to the next, showing a circular motion of Lean production"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} />
          <Col md={6}>
            <a name="timeframes" />
            <H2>Lean project timescales</H2>
            <P>
              All projects are different but we’ve proven that our process can
              deliver quality, fully researched and tested tech in just 3.5
              weeks - from idea to launch. Learn more on our{' '}
              <Link to="https://medium.com/leanjs/reactjs-academy-2018-website-design-case-study-4b2074dc4e5d">
                blog
              </Link>
            </P>
            <P>
              The reason for this is our unique process and the tools we utilise
              to create products and processes - a combination of design
              thinking, cutting edge development skills, user-centred project
              management good practices and passion from the LeanJS team.
            </P>
            <P>
              <LinkButton to="/case-studies" hasArrows dark>
                Case studies
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section dark>
      <Grid>
        <Row>
          <Col>
            <a name="scalability" />
            <H2>Scalability in an evolving tech world</H2>
            <SupportingText>
              Starting small doesn't mean we ignore the bigger picture...
            </SupportingText>
            <P>
              Digital transformation has been all the rage over the past few
              years and using traditional ‘top-down’ approaches, the desired
              outcomes can be incredibly hard to achieve.
            </P>
            <P>
              However, our experience tells us that working incrementally means
              less exposure to business risks and creates more learnings from
              which to build from.
            </P>
            <P>
              Our process combines Lean Startup thinking with UX design
              processes and ReactJS’s revolutionary development methodology
              means stakeholders can do one important thing: make better, faster
              business decisions.
            </P>

            <P>
              <LinkButton to="/team-principles" hasArrows>
                Our team and principles
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col>
            <a name="futureFriendlinessAndHandover" />
            <H2>Guiding you into the future</H2>
            <SupportingText>
              Handovers can be problematic, but our coaching expertise can help
              ease the pain...
            </SupportingText>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <P>
              <img
                src={ALEX_TEACHING2}
                alt="In a classroom full of students, Alex has his back to the image whilst presenting to those students"
              />
            </P>
          </Col>
          <Col md={1} />
          <Col md={6}>
            <P>
              Bacon ipsum dolor amet bresaola turkey ribeye corned beef chuck.
              Turducken pork belly rump hamburger.
            </P>
            <P>
              Frankfurter turducken beef doner cupim jerky alcatra, drumstick
              kevin meatball corned beef turkey bresaola chuck salami. Alcatra
              drumstick sausage landjaeger burgdoggen venison t-bone turkey
              bresaola swine kevin turducken.
            </P>
            <P>
              Turducken fatback sausage, bresaola venison pig hamburger pork
              loin pancetta porchetta landjaeger burgdoggen shankle doner.
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default OurProcess
