import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import {
  CASE_STUDY_ABINBEV,
  MUGSHOT_ABINBEV,
  MUGSHOT_STHALHER,
  CASE_STUDY_FINGOPAY,
  MUGSHOT_FINGOPAY,
  MUGSHOT_BU,
  CASE_STUDY_BU,
  MUGSHOT_ASOS,
  CASE_STUDY_ASOS,
} from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Blockquote2 } from '../components/text'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import Circle from '../components/elements/Circle'
import HighlightedItem from '../components/decoration/HighlightedItem'

const CaseStudyTitle = styled(H2)`
  no-wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CaseStudyExpoBullets = ({ content }) => (
  <Ul unstyled>
    {content.map(item => (
      <Li>
        <SmallIconAndSentence
          icon={
            <Circle size={60 / 18} bg={LIGHTGREY}>
              {item.point}
            </Circle>
          }
          sentence={item.description}
        />
      </Li>
    ))}
  </Ul>
)

const CaseStudies = () => (
  <React.Fragment>
    <Header
      titleLines={['Case Studies']}
      links={[
        {
          text: 'Boston University',
          to: 'boston',
        },
        {
          text: 'Fingo Pay',
          to: 'fingo',
        },
        {
          text: 'ABInBev',
          to: 'abinbev',
        },
        {
          text: 'ASOS.com',
          to: 'asos',
        },
      ]}
      bgImg="home"
      bulletPoints={[
        {
          icon: 'industry',
          sentence:
            'Digital solutions built and user tested for over 20+ sectors',
        },
        {
          icon: 'teaching',
          sentence: 'Over 1500 training participants in just 2 years',
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <a name="abinbev" />
            <CaseStudyTitle>
              ABInBev
              <Topic dark>app</Topic>
            </CaseStudyTitle>
          </Col>
          <Col xs={6} />
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={[
                {
                  point: 'WHAT',
                  description: 'Game app to support a Christmas campaign',
                },
                {
                  point: 'HOW',
                  description: 'Rapid prototyping and developement',
                },
                {
                  point: 'WHY',
                  description: 'Increasing shopping card value',
                },
                {
                  point: 'TIME',
                  description: '6 week turnaround',
                },
                {
                  point: 'RESULT',
                  description: '90% increase in shopping card value',
                },
              ]}
            />
          </Col>
          <Col md={6}>
            <Image src={CASE_STUDY_ABINBEV} />
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Blockquote2>
              We never thought it possible! We only had a couple of months until
              Christmas but LeanJS sorted us out. They were highly professional
              yet friendly and very effective.
            </Blockquote2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={MUGSHOT_ABINBEV}
              name="Mertens Dries"
              jobTitle="Head of Marketing at Saveur Bière (ABinBev)"
              company="ASOS.com"
              color={DARKGREY}
            />
          </Col>
          <Col md={6}>
            {/* <LinkButton external to="https://medium.com/leanjs">
              Blog: How apps increase <br /> shopping value by 90%
            </LinkButton> */}
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <HighlightedItem>
        <Grid>
          <Row>
            <Col xs={6}>
              <a name="fingo" />
              <CaseStudyTitle>
                FingoPay
                <Topic dark>working mvp</Topic>
              </CaseStudyTitle>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <CaseStudyExpoBullets
                content={[
                  {
                    point: 'WHAT',
                    description: 'Biometric payment onboarding MVP',
                  },
                  {
                    point: 'HOW',
                    description:
                      'Rapid prototyping, React Native with Circle CI and card.io integration',
                  },
                  {
                    point: 'WHY',
                    description:
                      'Increase user base, create buzz around alternative payment system',
                  },
                  {
                    point: 'TIME',
                    description: '2 week turnaround',
                  },
                  {
                    point: 'RESULT',
                    description: 'To be implemented across 100 pubs in the UK',
                  },
                ]}
              />
            </Col>
            <Col md={6}>
              <Image src={CASE_STUDY_FINGOPAY} />
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <Blockquote2>
                We’d been working on the platform for a while but onboarding was
                an issue. LeanJS came in, discovered the issues in real life and
                provided a workable solution in a fraction of the time we
                expected. Amazed.
              </Blockquote2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Mugshot
                image={MUGSHOT_STHALHER}
                name="Stuart Nelmes"
                jobTitle="Chief Technology Officer"
                company="Stahler/FingoPay"
                color={DARKGREY}
              />
            </Col>
            <Col md={6}>
              <LinkButton external to="https://medium.com/leanjs">
                Blog: Rapid prototyping IRL, in a pub
              </LinkButton>
            </Col>
          </Row>
        </Grid>
      </HighlightedItem>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <a name="boston" />
            <CaseStudyTitle>
              Boston University
              <Topic dark>website</Topic>
            </CaseStudyTitle>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={[
                {
                  point: 'WHAT',
                  description: 'Advanced MVP site for AGNI literary journal',
                },
                {
                  point: 'HOW',
                  description: 'Lean UX, ReactJS development and migration',
                },
                {
                  point: 'WHY',
                  description:
                    'Aiming to increase readership and improve brand awareness',
                },
                {
                  point: 'TIME',
                  description: '5 month turnaround',
                },
                {
                  point: 'RESULT',
                  description:
                    '10,000 articles migrated, 50% bounce rate reduction',
                },
              ]}
            />
          </Col>
          <Col md={6}>
            <Image src={CASE_STUDY_BU} />
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Blockquote2>
              LeanJS understood our mindset with a ability to ‘chameleon’
              themselves. A great team to be part of, always transparent - what
              they created for us was incredible.
            </Blockquote2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={MUGSHOT_BU}
              name="Bill Pierce"
              jobTitle="Editor, AGNI"
              company="Boston University"
              color={DARKGREY}
            />
          </Col>
          <Col md={6}>
            <LinkButton external to="https://medium.com/leanjs">
              Blog: AGNI for Boston University Case Study
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <HighlightedItem>
        <Grid>
          <Row>
            <Col xs={6}>
              <a name="asos" />
              <CaseStudyTitle>
                ASOS.com
                <Topic dark>training</Topic>
              </CaseStudyTitle>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <CaseStudyExpoBullets
                content={[
                  {
                    point: 'WHAT',
                    description: 'Team-wide ReactJS training',
                  },
                  {
                    point: 'HOW',
                    description:
                      '1 week intensive training at the Asos offices',
                  },
                  {
                    point: 'WHY',
                    description:
                      'To ensure the dev team is equipped with the most up-to-date code skills',
                  },
                  {
                    point: 'RESULT',
                    description:
                      'Dev team now work in ReactJS, increasing productivity and code compliance',
                  },
                ]}
              />
            </Col>
            <Col md={6}>
              <Image src={CASE_STUDY_ASOS} />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Blockquote2>
                Our team had been talking about ReactJS for a while and when I
                realised how effecient it can be, it was time for a change.
                LeanJS tailored training for our needs and now we don’t work any
                othe way.
              </Blockquote2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Mugshot
                image={MUGSHOT_ASOS}
                name="Bill Pierce"
                jobTitle="Editor, AGNI"
                company="Boston University"
                color={DARKGREY}
              />
            </Col>
            <Col md={6}>
              <LinkButton external to="https://medium.com/leanjs">
                Blog: How we teach React at LeanJS
              </LinkButton>
            </Col>
          </Row>
        </Grid>
      </HighlightedItem>
    </Section>

    {/* <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <a name="upmentoring" />
            <CaseStudyTitle>
              UpMentoring
              <Topic dark>web app</Topic>
            </CaseStudyTitle>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={[
                {
                  "point": "WHAT",
                  "description": "Tech training booking and mentoring web app "
                },
                {
                  "point": "HOW",
                  "description": "ReactJS development, GraphQL"
                },
                {
                  "point": "WHY",
                  "description":
                    "Improve tech students communication with mentors on their courses"
                },
                {
                  "point": "TIME",
                  "description": "Lean project (continuous)"
                },
                {
                  "point": "RESULT",
                  "description": "500+ users currently using the system"
                }
              ]}
            />
          </Col>
          <Col md={6}>
            <Image src={} />
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Blockquote2>
              I’ve been used UpMentoring for a while and it really helps with
              getting class feedback. Using it means I can improve classes and
              teach.
            </Blockquote2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={''}
              name="Bill Pierce"
              jobTitle="Editor, AGNI"
              company="Boston University"
              color={DARKGREY}
            />
          </Col>
          <Col md={6}>
            <LinkButton external to="https://upmentoring.com">
              Visit UpMentoring.com
            </LinkButton>
          </Col>
        </Row>
      </Grid>
    </Section> */}
  </React.Fragment>
)

export default CaseStudies
