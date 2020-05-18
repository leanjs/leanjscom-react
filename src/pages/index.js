import React from 'react'
import styled from 'styled-components'

import Link from '../components/navigation/Link'
import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Tabs, {
  TabList,
  TabItem,
  TabContent,
} from '../components/navigation/Tabs'
import ValueBullet from '../components/bullets/ValueBullet'
import SmallIconAndSentences from '../components/bulletedsections/SmallIconAndSentences'
import {
  REACTBLUE,
  GRAPHQLPINK,
  UXGREEN,
  SPACING_MEDIUM,
  SPACING_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  SPACING_STANDARD,
} from '../config/styles'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import {
  H2,
  H3,
  H4,
  H3a,
  H5,
  P,
  Strong,
  SupportingText,
} from '../components/text'
import Instagram from '../components/feeds/Instagram'
import ReactIconCircle from '../components/logos/react_icon_circle'
import UxIconCircle from '../components/logos/ux_icon_circle'
import GraphqlIconCircle from '../components/logos/graphql_icon_circle'
import UxIcon from '../components/logos/ux_icon.js'
import ReactIcon from '../components/logos/react_icon.js'
import GraphqlIcon from '../components/logos/graphql_icon.js'

const UX_SPRINT = 'UX_SPRINT'
const REACT_SPRINT = 'REACT_SPRINT'
const GRAPHQL_SPRINT = 'GRAPHQL_SPRINT'

const SprintCard = styled.div`
  border: 1px solid #ddd;
  padding: ${SPACING_MEDIUM};
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    margin-top: ${SPACING_STANDARD};
  }
`

const SprintTabs = styled.div``

const DaySummarys = styled.div`
  border-left: 10px solid;
  border-color: ${props => {
    if (props.ux) {
      return `${UXGREEN}`
    } else if (props.react) {
      return `${REACTBLUE}`
    } else if (props.graphql) {
      return `${GRAPHQLPINK}`
    }
    return null
  }}
  padding-left: ${SPACING_STANDARD};
  small {
    font-size: ${FONT_SIZE_SMALL}
    a {
      font-size: ${FONT_SIZE_SMALL}
    }
  }
`

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

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="Optimizing Digital Business - Rapidly & Incrementally!"
      bulletPoints={[
        {
          icon: 'development',
          sentence:
            'Our series of sprints can help you cut business costs & speed up the development process by introducing modern Web technology incrementally',
          button: {
            to: '#sprints',
            text: 'How it works',
          },
        },
      ]}
    />
    <Link to="#sprints" name="sprints" />
    <Section>
      <Grid>
        <Row>
          <H2>Maximum efficiency, minimum risk</H2>
        </Row>
        <Row>
          <Col md={7}>
            <SupportingText>
              The LeanJS <strong>Full Stack Sprint</strong> series brings you
              the efficiency of proven cutting-edge technology, helping you
              improve project tech & processes in the Leanest way possible.
            </SupportingText>
            {/* <P>
              Using hands on workshops and fitting in with your current
              projects, we share our know-how and you walk away with the
              efficiency you want!
            </P> */}
            <P>
              We base our sprints around a real problem you're experiencing in
              your tech products. From increasing product development speed to
              tech stack optimization, we offer our experts if they can make a
              real difference.
            </P>
            <H3a> How it works</H3a>
            <P>
              Start incrementaly. Stop at any step. Optimize tech and processes
              and increase competitive advantage in 3 low-risk steps:
            </P>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/full_stack_sprint_illustrations%2FFullStackSprint.jpg?alt=media" />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <SprintCard>
              <H3a>1. Value Proposition</H3a>
              <H4>1/2 Day</H4>
              <Ul>
                <Li>Stakeholders research: Tech Lead/s and/or CTO</Li>
                <Li>Problem statement and priorities</Li>
                <Li>Overview of the software architecture and code</Li>
                <Li>Value proposition and recommendations</Li>
              </Ul>
              <LinkButton to="#contact" hasArrows dark>
                Contact us
              </LinkButton>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>2. Proof Of Concept</H3a>
              <H4>1-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Architecture and code review</Li>
                <Li>Hands-on workshops and team training on the new tech</Li>
                <Li>Prototyping and coding with your team</Li>
                <Li>Findings, Conclusions, and Recommendations</Li>
              </Ul>
              <LinkButton to="#contact" hasArrows dark>
                Contact us
              </LinkButton>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>3. Production-ready Code</H3a>
              <H4>2-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Prototype migration to your codebase</Li>
                <Li>
                  Code improvement and code review pairing our experts with your
                  team
                </Li>
                <Li>On-demand workshops based on any arising issues</Li>
                <Li>Deployment & measurement plan</Li>
                <Li>Final report and roll-out plan</Li>
              </Ul>
              <LinkButton to="#contact" hasArrows dark>
                Contact us
              </LinkButton>
            </SprintCard>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Link to="#about-us" name="about-us" />
    <Section dark>
      <Grid>
        <Row>
          <Col md={8}>
            <H2>About us</H2>
            <SupportingText>
              Our Sprints are all about working{' '}
              <strong>with you and your team</strong>
            </SupportingText>
            <P>
              In 1-week/ 2-week bursts we help your team create positive,
              future-facing solutions that are formulated to be on-time and
              on-budget.
            </P>
          </Col>
        </Row>

        <Row>
          <Col>
            <H3a>Our guiding principles</H3a>
          </Col>
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
      </Grid>
    </Section>
    <Link to="#academy" name="academy" />
    <Section>
      <Grid>
        <Row>
          <Col md={7}>
            <H2>React GraphQL Academy</H2>
            <SupportingText>
              Upskill your team/s in the most effective way for your company
            </SupportingText>
            <P>
              The Academy is offering in-person and remote training which can
              adapt to any company regardless of the size or budget. From
              in-person private team training to public bootcamps, your
              developers work alongside experts on real-world problems.
              Part-time or short time accelerated formats available.
            </P>

            <LinkButton to="https://reactgraphql.academy/" hasArrow dark>
              Visit the Academy
            </LinkButton>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/alex_teaching.jpg?alt=media" />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
