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
          <H2>Maximum effeciency, minimum time - choose your sprint...</H2>
          <Col md={7}>
            <SupportingText>
              The LeanJS <strong>Full Stack Sprint</strong> offers the secrets
              of super-fast design and development, improving project process
              the Leanest way possible.
            </SupportingText>
            <P>
              Using hands on workshops and fitting in with your current/future
              projects, we share our proven methodology and you walk away with
              the effeciency you want!
            </P>
            <P>
              We promise to base any of 3 types of sprints around a real problem
              you're experiencing in your tech products. Whether it's users who
              aren't signing up that precious newsletter or your APIs aren't
              fitting into React, we've got a sprint for you.
            </P>
            <Strong>Just choose a sprint (or several) and go!</Strong>
          </Col>
          <Col md={5}>
            <img src="https://via.placeholder.com/350x250" />
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
                <LinkButton to="#" hasArrows dark>
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
                    'Day 1: ',
                    'Day 2: ',
                    'Day 3: ',
                    'Day 4: ',
                    'Day 5: ',
                  ]}
                />
                <LinkButton to="#" hasArrows dark>
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
                    'Day 1: ',
                    'Day 2: ',
                    'Day 3: ',
                    'Day 4: ',
                    'Day 5: ',
                  ]}
                />
                <LinkButton to="#" hasArrows dark>
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
            <H2>Your team of mentors</H2>
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
            <Col>
              <LinkButton to="#" hasArrows>
                Want to talk? Contact us!
              </LinkButton>
            </Col>
          </Col>
        </Row>
        <Row />
        <Row>
          <Col>
            <H3a>Our Sprint Leads / Mentors</H3a>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Profile>
              <PersonName>UX design</PersonName>
              <br />
              <PersonName>Paul Woodley</PersonName>
              <img src="https://via.placeholder.com/350x350" />
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
              <img src="https://via.placeholder.com/350x350" />
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
              <img src="https://via.placeholder.com/350x350" />
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
        <Row>
          <H2>How the Full Stack Sprint works </H2>
          <Row>
            <Col md={7}>
              <SupportingText>
                A highly scalable series of 1-week sprints, the Full Stack
                Sprint guides your team on working super-lean using unique
                tooling and approaches.
              </SupportingText>
              <P>
                In modern tech, design and development can still take a long
                time. We understand!
              </P>
              <P>
                You can choose any (or all!) of our sprints, which condense
                bleeding-edge UX design and React & GraphQL development into
                1-week sprints that can help kickstart that troublesome project
                you've been itching to get to.
              </P>
              <P>
                All we need is you, your team, a maximum of 3 weeks blocked out
                and a trees-worth of post-its!
              </P>
            </Col>
            <Col md={4}>
              <img src="https://via.placeholder.com/350x250" />
            </Col>
          </Row>
        </Row>
        <Row />
        <SprintTabs>
          <Row>
            <Col md={12}>
              <H3a>Sprint 1 - UX design</H3a>
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
        <SprintTabs>
          <Row>
            <Col md={12}>
              <H3a>Sprint 2 - React Development</H3a>
            </Col>
          </Row>
          <Row>
            <Col>
              <H5>Day 1: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 2: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 3: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 4: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 5: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
        </SprintTabs>
        <SprintTabs>
          <Row>
            <Col md={12}>
              <H3a>Sprint 2 - GraphQL Development</H3a>
            </Col>
          </Row>
          <Row>
            <Col>
              <H5>Day 1: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 2: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 3: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 4: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
                },
              ]}
            />
          </Row>
          <Row>
            <Col>
              <H5>Day 5: Something</H5>
            </Col>
          </Row>
          <Row>
            <SmallIconAndSentences
              wrapWithCols={true}
              bulletType={ValueBullet}
              items={[
                {
                  image: 'learning',
                  sentence: 'Something',
                },
                {
                  image: 'caring',
                  sentence: 'Something',
                },
                {
                  image: 'people',
                  sentence: 'Something',
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
