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
  REACTBLUE,
  GRAPHQLPINK,
  UXGREEN,
  SPACING_MEDIUM,
  SPACING_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_LOWERQUARTILE,
  SPACING_SMALL,
  SPACING_STANDARD,
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
import {
  H2,
  H2Ref,
  H3a,
  H5,
  P,
  Strong,
  SupportingText,
} from '../components/text'
import Image from '../components/elements/Image'
import Instagram from '../components/feeds/Instagram'
import TeamBio from '../components/mugshots/TeamBio'
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h3 {
    margin-top: ${SPACING_STANDARD};
  }
`

const Profile = styled.div`
  padding: ${SPACING_STANDARD};
  margin-bottom: ${SPACING_MEDIUM};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    max-height: 200px;
  }
`

const PersonName = styled.div`
  font-size: ${FONT_SIZE_MEDIUM};
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${SPACING_STANDARD};
`

const Coaches = styled.div`
  border: 1px dashed white;
  padding: ${SPACING_LARGE};
  padding-bottom: 0;
`

const LinkSocials = styled(Link)`
  width: 100%;
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
      subtitle="Enabling product teams to innovate - rapidly!"
      bulletPoints={[
        {
          icon: 'development',
          sentence:
            'Our series of 1-week sprint trainings can revolutionise your UX, React and GraphQL processes',
          button: {
            to: '#how-it-works',
            text: 'How it works',
          },
        },
      ]}
    />
    <Link to="#sprint-types" name="sprint-types" />
    <Section>
      <Grid>
        <Row>
          <H2>Maximum effeciency, minimum time - choose your sprint...</H2>
        </Row>
        <Row>
          <Col md={7}>
            <SupportingText>
              The LeanJS <strong>Full Stack Sprint</strong> series brings you
              the secrets of achieving super-fast design and development,
              helping you improve project processes in the Leanest way possible.
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
            <Strong> Just choose a sprint (or several) and go!</Strong>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/full_stack_sprint_illustrations%2FFullStackSprint.jpg?alt=media" />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <SprintCard>
              <UxIconCircle />
              <H3a>UX Sprint - 1 Week</H3a>
              <Ul>
                <Li>Day 1: Problem space & research</Li>
                <Li>Day 2: Ideation</Li>
                <Li>Day 3: Prototyping in code</Li>
                <Li>Day 4: User testing</Li>
                <Li>Day 5: Iterate on findings</Li>
              </Ul>
              <LinkButton to="#sprint-breakdowns" hasArrows dark>
                Day-by-day breakdown
              </LinkButton>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <ReactIconCircle />
              <H3a>React Sprint - 1 Week</H3a>
              <Ul>
                <Li>Day 1: Adv. patterns and FP </Li>
                <Li>Day 2: Testing and performance</Li>
                <Li>Day 3: Audit code, sprint goals</Li>
                <Li>Day 4: Code improvement</Li>
                <Li>Day 5: Final coding, and demos</Li>
              </Ul>
              <LinkButton to="#sprint-breakdowns" hasArrows dark>
                Day-by-day breakdown
              </LinkButton>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <GraphqlIconCircle />
              <H3a>GraphQL Sprint - 1 Week</H3a>
              <Ul>
                <Li>Day 1: GraphQL fundamentals</Li>
                <Li>Day 2: Advanced GraphQL</Li>
                <Li>Day 3: Audit code, sprint goals</Li>
                <Li>Day 4: Code improvement</Li>
                <Li>Day 5: Final coding, and demos</Li>
              </Ul>
              <LinkButton to="#sprint-breakdowns" hasArrows dark>
                Day-by-day breakdown
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
            <H2>Your team of coaches</H2>
            <SupportingText>
              Our design and dev sprints are all about working{' '}
              <strong>with you and your team</strong>
            </SupportingText>
            <P>
              In 1-week bursts we mentor you to create positive, future-facing
              solutions that can results in tech products that are formulated to
              be on-time and on-budget.
            </P>
          </Col>
          <Col md={4}>
            <LinkButton to="#contact-us" hasArrows>
              Any questions? Contact us!
            </LinkButton>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Profile>
              <PersonName>UX Design Lead</PersonName>
              <br />
              <PersonName>Paul Woodley</PersonName>
              <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_UX_Paul.png?alt=media" />
              <P>
                Teaching is a real passion for Paul. Drawing on 10+ years of UX
                and UI design experience working with clients like the Bank of
                England, Thomas Cook and Boston University, Paul loves sharing
                his skills and knowledge of the entire UX spectrum, from User
                Research to Prototyping, Testing to UI and more.
              </P>
              <LinkSocials to="https://twitter.com/paulw_design">
                Twitter
              </LinkSocials>

              <LinkSocials to="https://www.linkedin.com/in/paulwoodleydesign/">
                LinkedIn
              </LinkSocials>
            </Profile>
          </Col>
          <Col md={4}>
            <Profile>
              <PersonName>React Lead</PersonName>
              <br />
              <PersonName>Alex Lobera</PersonName>
              <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_React_Alex.png?alt=media" />
              <P>
                Alex is the Founder and Head Coach of{' '}
                <Link to="https://reactjs.academy/">ReactJS Academy</Link>,
                Europe’s first React training school. He is an authority on
                ReactJS, with over 15 years of experience as both a teacher and
                as Tech Lead. He has brought his real-world, project-based
                knowledge and Lean process advocacy to over 1,500 students.
              </P>{' '}
              <LinkSocials to="https://twitter.com/alex_lobera">
                Twitter
              </LinkSocials>
              <br />
              <LinkSocials to="https://www.linkedin.com/in/alexlobera/">
                LinkedIn
              </LinkSocials>
            </Profile>
          </Col>
          <Col md={4}>
            <Profile>
              <PersonName>GraphQL Lead</PersonName>
              <br />
              <PersonName>Richard Moss</PersonName>
              <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_GraphQL_Rich.png?alt=media" />
              <P>
                As Product Owner of{' '}
                <Link to="https://reactjs.academy/">ReactJS Academy</Link>,
                Richard is at the forefront of GraphQL education. For over a
                decade, he has worked on an array of EdTech projects, taught
                coding to adults and kids, and even tutored English via his
                online channel, ‘English Tutors Live’. Richard’s here to share
                his GraphQL expertise.
              </P>{' '}
              <LinkSocials to="https://twitter.com/ric9176">
                Twitter
              </LinkSocials>
              <br />
              <LinkSocials to="https://www.linkedin.com/in/richard-moss-55881b82/">
                LinkedIn
              </LinkSocials>
            </Profile>
          </Col>
        </Row>
        <Row>
          <Col>
            <Coaches>
              <H3a>Specialist coaches</H3a>
              <P>
                Our Leads strategise your design and development sprints but our
                supporting cast of coaches can offer you flexibility. We can
                offer sprints geared towards sub-specialisms like React Native,
                UI Design, Marketing and many more.
              </P>
              <Instagram photosPerRow={6} />
            </Coaches>
          </Col>
        </Row>
        <Row> </Row>
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
    <Link to="#how-it-works" name="how-it-works" />
    <Section>
      <Grid>
        <Row>
          <H2>How the Full Stack Sprint series works </H2>
          <Row>
            <Col md={7}>
              <SupportingText>
                A highly scalable series of 1-week sprints, the Full Stack
                Sprint guides your team on working super-lean using unique
                tooling and approaches.
              </SupportingText>
              <P>
                We get it - design and development can take a long time. But it
                doesn’t have to be that way with our Full Stack Sprint!
              </P>
              <P>
                You can choose any (or all!) of our development and design
                sprints, which condense bleeding-edge UX design and React &
                GraphQL development into 1-week sprints.
              </P>
              <P>
                All we need is you, your team, a maximum of 3 weeks blocked out
                and a trees-worth of post-its!
              </P>
              <LinkButton to="#contact-us" hasArrows>
                Any questions? Contact us!
              </LinkButton>
            </Col>
            <Col md={1} />
            <Col md={4}>
              <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/alex_teaching.jpg?alt=media" />
            </Col>
          </Row>
        </Row>
        <Link to="#sprint-breakdowns" name="sprint-breakdowns" />
        <H3a>Day-by-day breakdowns</H3a>
        <Tabs active={UX_SPRINT}>
          <TabList>
            <TabItem name={UX_SPRINT}>UX Design Sprint</TabItem>
            <TabItem name={REACT_SPRINT}>React Development Sprint</TabItem>
            <TabItem name={GRAPHQL_SPRINT}>GraphQL Development Sprint</TabItem>
          </TabList>
          <TabContent name={UX_SPRINT}>
            <SprintTabs>
              <DaySummarys ux>
                <Row>
                  <Col>
                    <H5>Day 1: Problem space / research</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Stakeholder research using our unique "Assumptions
                          Canvas"
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Qualitative user research, validation of the
                          Assumptions Canvas
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Prioritise and decide upon key jobs-to-be-done to
                          focus upon
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys ux>
                <Row>
                  <Col>
                    <H5>Day 2: Ideation</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Ideation workshop to create solutions based on user
                          findings
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Design studio workshop bringing out all ideas and
                          align expectations
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Create the design strategy document - no wireframes
                          required!
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys ux>
                <Row>
                  <Col>
                    <H5>Day 3: Prototyping in code</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Minimum viable product creation and finalised strategy
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Pairing sessions between designers and developers</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Demos and retros with the whole team</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys ux>
                <Row>
                  <Col>
                    <H5>Day 4: User testing</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Usability testing with pre-sourced users to find
                          issues
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Any team members able to observe user behaviours</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Affinity mapping of usability testing findings</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys ux>
                <Row>
                  <Col>
                    <H5>Day 5: Iteration / retros</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Review of testing, solutionising from insights</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Final design and dev pairing session</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <UxIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Final demo and retro, handshakes and beers!</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
            </SprintTabs>
          </TabContent>
          <TabContent name={REACT_SPRINT}>
            <SprintTabs>
              <DaySummarys react>
                <Row>
                  <Col>
                    <H5>
                      Day 1: Advanced patterns, functional programming (FP)
                    </H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>FP training - closure, currying and composition</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Creating advanced reusable and maintainable components
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Design systems and advanced styled components</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys react>
                <Row>
                  <Col>
                    <H5>Day 2: Testing and performance training</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Testing APIs and Redux, testing principles and
                          frameworks
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Testing in React - units, integration and snapshot
                          testing, tooling
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Performance - profiling, avoiding renderings,
                          windowing, memoization
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys react>
                <Row>
                  <Col>
                    <H5>Day 3: Auditing code, setting sprint goal</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Code analysis and advice on best React practices</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Set the React sprint goal based on your business goals
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          On-demand workshops and pairing based on any arising
                          issues
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys react>
                <Row>
                  <Col>
                    <H5>Day 4: Collaborative improvement of code base</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Identify and advise on any ongoing issues in code base
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          More workshops, tailored on the fly to quickly solve
                          problems
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Pair programming between our coaches and your
                          developers
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys react>
                <Row>
                  <Col>
                    <H5>Day 5: Final coding, demos and outcomes</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Final pairing sessions between coaches and your
                          developers
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>As a team, coding is brought to a close</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <ReactIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Final touches, demo and improvements report</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
            </SprintTabs>
          </TabContent>
          <TabContent name={GRAPHQL_SPRINT}>
            <SprintTabs>
              <DaySummarys graphql>
                <Row>
                  <Col>
                    <H5>Day 1: GraphQL fundamentals</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Thinking in GraphQL, the GraphQL schema and switching
                          from REST
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Data sources - wrapping REST APIs & microservices with
                          GraphQL
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Apollo Client fundamentals - client, query and
                          mutation principles
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys graphql>
                <Row>
                  <Col>
                    <H5>Day 2: Advanced GraphQL</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Advanced schema - unions, extensions, fragments,
                          modularity
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Performance - data loaders, query batching, persisted
                          and caching queries
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Advanced GraphQL with React - co-location, fragments,
                          errors
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys graphql>
                <Row>
                  <Col>
                    <H5>Day 3: Audit code, setting sprint goal</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Code analysis and advice on best GraphQL practices
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Set the GraphQL sprint goal based on your business
                          goals
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          On-demand workshops and pairing based on any arising
                          coding issues
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys graphql>
                <Row>
                  <Col>
                    <H5>Day 4: Collaborative improvement of code base</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Identify and advise on any ongoing issues in code base
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          More workshops, tailored on the fly to quickly solve
                          problems
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Pair programming between our coaches and your
                          developers
                        </P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
              <DaySummarys graphql>
                <Row>
                  <Col>
                    <H5>Day 5: Final coding, demos and outcomes</H5>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>
                          Final pairing sessions between coaches and your
                          developers
                        </P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>As a team, coding is brought to a close</P>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <Row>
                      <Col md={4} sm={3} xs={3}>
                        <GraphqlIcon />
                      </Col>
                      <Col md={8} sm={9} xs={9}>
                        <P>Final touches, demo and improvements report</P>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DaySummarys>
            </SprintTabs>
          </TabContent>
        </Tabs>
      </Grid>
    </Section>
    <Link to="#contact-us" name="contact-us" />
  </React.Fragment>
)

export default IndexPage
