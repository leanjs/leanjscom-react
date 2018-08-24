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

const caseStudies = [
  {
    title: 'ABinBev',
    topic: 'app',
    anchor: 'abinbev',
    bulletpoints: [
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
    ],
    image: CASE_STUDY_ABINBEV,
    quote: {
      author: {
        image: MUGSHOT_ABINBEV,
        name: 'Mertens Dries',
        jobTitle: 'Head of Marketing at Saveur Bière (ABinBev)',
        company: 'ABinBev',
      },
      text: `We never thought it possible! We only had a couple of months until Christmas but LeanJS sorted us out. They were highly professional yet friendly and very effective.`,
    },
  },
  {
    title: 'FingoPay',
    topic: 'working mvp',
    anchor: 'fingo',
    highlighted: true,
    bulletpoints: [
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
    ],
    image: CASE_STUDY_FINGOPAY,
    quote: {
      author: {
        image: MUGSHOT_STHALHER,
        name: 'Stuart Nelmes',
        jobTitle: 'Chief Technology Officer',
        company: 'Stahler/FingoPay',
      },
      text: `We’d been working on the platform for a while but onboarding was an issue. LeanJS came in, discovered the issues in real life and provided a workable solution in a fraction of the time we expected. Amazed.`,
    },
  },

  {
    title: 'Boston University',
    topic: 'website',
    anchor: 'boston',
    bulletpoints: [
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
        description: '10,000 articles migrated, 50% bounce rate reduction',
      },
    ],
    image: CASE_STUDY_BU,
    quote: {
      author: {
        image: MUGSHOT_BU,
        name: 'Bill Pierce',
        jobTitle: 'Editor, AGNI',
        company: 'Boston University',
      },
      text: `LeanJS understood our mindset with a ability to ‘chameleon’ themselves. A great team to be part of, always transparent - what they created for us was incredible.`,
    },
    button: {
      external: true,
      to: 'https://medium.com/leanjs',
      text: 'Blog: AGNI for Boston University Case Study',
    },
  },

  {
    title: 'ASOS',
    topic: 'training',
    anchor: 'asos',
    highlighted: true,
    bulletpoints: [
      {
        point: 'WHAT',
        description: 'Team-wide ReactJS training',
      },
      {
        point: 'HOW',
        description: '1 week intensive training at the Asos offices',
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
    ],
    image: CASE_STUDY_ASOS,
    quote: {
      author: {
        image: MUGSHOT_ASOS,
        name: 'James Norton',
        jobTitle: 'Engineering Practise Lead',
        company: 'ASOS.com',
      },
      text: `Our team had been talking about ReactJS for a while and when I realised how effecient it can be, it was time for a change. LeanJS tailored training for our needs and now we don’t work any othe way.`,
    },
    button: {
      external: true,
      to: 'https://medium.com/leanjs',
      text: 'Blog: How we teach React at LeanJS',
    },
  },
]

const CaseStudyExpoBullets = ({ content }) => (
  <Ul unstyled>
    {content.map((item, i) => (
      <Li key={`case-study-expo-${i}`}>
        <SmallIconAndSentence
          flushLeft
          icon={
            <Circle size={90 / 18} bg={LIGHTGREY}>
              {item.point}
            </Circle>
          }
          sentence={item.description}
        />
      </Li>
    ))}
  </Ul>
)

const CaseStudyInner = props => (
  <Grid>
    <Row>
      <Col xs={6}>
        <a name={props.anchor} />
        <CaseStudyTitle>
          {props.title}
          <Topic dark>{props.topic}</Topic>
        </CaseStudyTitle>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <CaseStudyExpoBullets content={props.bulletpoints} />
      </Col>
      <Col md={6}>
        <Image src={props.image} />
      </Col>
    </Row>

    <Row>
      <Col md={8}>
        <Blockquote2>{props.quote.text}</Blockquote2>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Mugshot {...props.quote.author} color={DARKGREY} />
      </Col>
      {props.button ? (
        <Col md={6}>
          <LinkButton external={props.button.external} to={props.button.to}>
            {props.button.text}
          </LinkButton>
        </Col>
      ) : null}
    </Row>
  </Grid>
)

const CaseStudy = props => (
  <Section>
    {props.highlighted ? (
      <HighlightedItem>
        <CaseStudyInner {...props} />
      </HighlightedItem>
    ) : (
      <CaseStudyInner {...props} />
    )}
  </Section>
)

const CaseStudies = () => (
  <React.Fragment>
    <Header
      titleLines={['Case Studies']}
      links={caseStudies.map(study => ({
        text: study.title,
        to: study.anchor,
      }))}
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

    {caseStudies.map((props, i) => (
      <CaseStudy {...props} key={`case-study-${i}`} />
    ))}
  </React.Fragment>
)

export default CaseStudies
