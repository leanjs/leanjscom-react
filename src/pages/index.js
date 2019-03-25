import React from 'react'
import styled from 'styled-components'

import Link from '../components/navigation/Link'
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
  DARKGREY,
  MEDIUMGREY,
  SPACING_MEDIUM,
  SPACING_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_LOWERQUARTILE,
} from '../config/styles'

import {
  ALEX,
  LENA,
  RICHARD,
  HORACIO,
  WILL,
  LUIS,
  PAUL,
  ALEX_RICH_LAPTOP,
  TEAMWORK,
} from '../resources/images'
import { ITERATION_DIAGRAM } from '../resources/images'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3a, H5, P, Strong, SupportingText } from '../components/text'
import Image from '../components/elements/Image'
import Instagram from '../components/feeds/Instagram'
import TeamBio from '../components/mugshots/TeamBio'

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

const Profile = styled.div`
  padding-right: ${SPACING_LARGE};
  margin-bottom: ${SPACING_MEDIUM};
`

const PersonName = styled.span`
  font-size: ${FONT_SIZE_MEDIUM};
`

const Strike = styled.span`
  text-decoration: line-through;
`

const SprintList = styled(Ul)`
  > li:not(:last-child) {
    padding-bottom: ${SPACING_LARGE};
  }
`

const SprintTabs = styled.div``

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="Home of the Full Stack Sprint"
      bulletPoints={[
        {
          icon: 'development',
          sentence:
            'You, your team and us - achieving UX + React + GraphQL in just 3 weeks ',
          button: {
            to: '#howitworks',
            text: 'How it works',
          },
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <H2>Enabling maximum effeciency - how your team COULD work</H2>
            <SupportingText>
              The <strong>Full Stack Sprint</strong> offers you and your team
              the secrets of super-fast design and development to improve your
              projects the Lean way.<br />
              <br />Using hands on workshops and fitting in with your
              current/future projects, we share our proven methodology and you
              walk away with the effeciency you want!
            </SupportingText>
          </Col>
        </Row>
        <Row>
          <Col>
            <P>Choose ANY (or all!) of these 3 sprints...</P>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <SprintList unstyled>
              <Li>
                <LargeIconAndPoints
                  image="fingopay"
                  heading="UX Sprint - 1 Week"
                  points={[
                    'Day 1: Problem space / research',
                    'Day 2: Ideation',
                    'Day 3: Prototyping in code',
                    'Day 4: User testing',
                    'Day 5: Iterate on findings',
                  ]}
                />
                <LinkButton to="/case-studies" hasArrows dark>
                  Find out more - UX Sprint
                </LinkButton>
              </Li>
            </SprintList>
          </Col>
          <Col md={4}>
            <SprintList unstyled>
              <Li>
                <LargeIconAndPoints
                  image="bostonuniversity"
                  heading="React Sprint - 1 Week"
                  points={[
                    'Day 1 = ',
                    'Day 2 = ',
                    'Day 3 = ',
                    'Day 4 = ',
                    'Day 5 = ',
                  ]}
                />
                <LinkButton to="/case-studies" hasArrows dark>
                  Find out more - React Sprint
                </LinkButton>
              </Li>
            </SprintList>
          </Col>
          <Col md={4}>
            <SprintList unstyled>
              <Li>
                <LargeIconAndPoints
                  image="abinbev"
                  heading="GraphQL Sprint - 1 Week"
                  points={[
                    'Day 1 = ',
                    'Day 2 = ',
                    'Day 3 = ',
                    'Day 4 = ',
                    'Day 5 = ',
                  ]}
                />
                <LinkButton to="/case-studies" hasArrows dark>
                  Find out more - GraphQL Sprint
                </LinkButton>
              </Li>
            </SprintList>
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
              Our design and dev sprints are all about working{' '}
              <strong>with you and your team</strong>
            </SupportingText>
          </Col>
          <Col md={7}>
            <P>
              In 1-week bursts we mentor you to create positive, future-facing
              solutions that can results in tech products that are formulated to
              be on-time and on-budget.
            </P>
          </Col>
          <Col>
            <LinkButton to="/team" hasArrows>
              Want to talk? Contact us!
            </LinkButton>
          </Col>
        </Row>
        <Row />
        <Row>
          <Col>
            <H3a>Your sprint guides</H3a>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Profile>
              <PersonName>UX design</PersonName>
              <br />
              <PersonName>Paul Woodley</PersonName>
              <img src="https://via.placeholder.com/350x65" />
              <P>
                With over 10 years of UX/UI design experience, Paul has been UX
                Lead of an array of projects with clients like the Bank of
                England, Thomas Cook and Boston University.
              </P>{' '}
              <P>
                His skills and experiene cover the entire UX spectrum from User
                Research, Prototyping, Testing and UI design as well a coding.
                Workshops and teaching are a real passion, demonstrated across
                his client work as well as at General Assembly's London Campus.
              </P>
              <Link>Twitter</Link>
              <br />
              <Link>LinkedIn</Link>
            </Profile>
          </Col>
          <Col md={4}>
            <Profile>
              <PersonName>React</PersonName>
              <br />
              <PersonName>Alex Lobera</PersonName>
              <img src="https://via.placeholder.com/350x65" />
              <P>
                As founder and Head Coach of ReactJS Academy - Europe's very
                first React training school, Alex is an authority on ReactJS
                teaching over 1500 students in his time.{' '}
              </P>
              <P>
                Hailing from Barcelona, Alex has been immersed in the world of
                development for over 15 years.His experience as Tech Lead across
                different organisations means he lends real-world project-based
                knowledge and Lean process advocacy to his coding skills
              </P>{' '}
              <Link>Twitter</Link>
              <br />
              <Link>LinkedIn</Link>
            </Profile>
          </Col>
          <Col md={4}>
            <Profile>
              <PersonName>GraphQL</PersonName>
              <br />
              <PersonName>Richard Moss</PersonName>
              <img src="https://via.placeholder.com/350x65" />
              <P>
                As you've guessed, mentoring is passion for us - and Richard is
                no exception. As Product Owner of ReactJS Academy, Richard is at
                the forefront of GraphQL education.{' '}
              </P>
              <P>
                Over the past decade, Richard has been a key developer across a
                host of EdTech and marketing projects - all while taking the
                time to fit in tutoring and mentoring kids and adults in coding
                as well as teaching English through his online channel 'English
                Tutors Live'.
              </P>{' '}
              <Link>Twitter</Link>
              <br />
              <Link>LinkedIn</Link>
            </Profile>
          </Col>
        </Row>
        <Row>
          <Col>
            <Instagram photosPerRow={6} />
          </Col>
        </Row>
        <Row>
          <Col>
            <H3a>Our guiding principles</H3a>
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
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Col>
          <H2>How the Full Stack Sprint works </H2>
        </Col>
        <Col>
          <SupportingText>
            A highly scalable series of 1-week sprints, the Full Stack Sprint
            teaches you how to work quickly using unique tooling and approaches.
          </SupportingText>
          <P>
            In modern tech, design and development can still take a long time.
            We understand!
          </P>
          <P>
            Condensing bleeding-edge UX design and React & GraphQL development
            into 1-week sprints can help get that troublesome project started on
            the right foot. All we need is you, your team, a maximum of 3 weeks
            blocked out and a trees-worth of post-its!
          </P>
        </Col>
        <Row />
        <SprintTabs>
          <Row>
            <Col md={12}>
              <H3a>Week 1 - user experience (UX) design</H3a>
            </Col>
          </Row>
          <Row>
            <Col>
              <H5>Day 1: Problem space / research</H5>
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
                    'Stakeholder research using our unique Assumptions Canvas',
                },
                {
                  image: 'caring',
                  sentence:
                    'User research, validation of the Assumptions Canvas',
                },
                {
                  image: 'people',
                  sentence:
                    'Prioritise and decide upon key jobs-to-be-done to focus upon',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 2: Ideation</H5>
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
                    'Ideation workshop to create solutions based on user findings',
                },
                {
                  image: 'caring',
                  sentence:
                    'Design studio workshop bringing out all ideas and align expectations',
                },
                {
                  image: 'people',
                  sentence:
                    'Create the design strategy document, no wireframes required!',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 3: Prototyping in code</H5>
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
                    'Minimum viable product creation and finalised strategy',
                },
                {
                  image: 'caring',
                  sentence: 'Pairing sessions between designers and developers',
                },
                {
                  image: 'people',
                  sentence: 'Demos and retros with the whole team',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 4: User testing</H5>
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
                    'Usability testing with pre-sourced users to find issues',
                },
                {
                  image: 'caring',
                  sentence: 'Any team members able observe user behaviours',
                },
                {
                  image: 'people',
                  sentence: 'Affinity mapping of usabilty testing findings',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 5: Iteration / retros</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Review of testing, solutionising from insights',
                },
                {
                  image: 'caring',
                  sentence: 'Final design and dev pairing session',
                },
                {
                  image: 'people',
                  sentence: 'Final demo and retro, handshakes and beers!',
                },
              ]}
            />
          </Row>
        </SprintTabs>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
