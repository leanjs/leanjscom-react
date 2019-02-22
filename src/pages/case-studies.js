import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
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
} from '../resources/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Blockquote2, MVPLink, SupportingText } from '../components/text'
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
    title: 'Boston University',
    anchor: 'boston',
    supportingText: 'Full UX process, UI and React website',
    paragraphs: [
      'Using our process to create a more advanced, content-heavy website meant thinking in high-level, usable systems rather than products.',
      'Harnessing the power of design thinking to create a streamlined information architecture, combined with a cutting-edge React + Gatsby tech stack, we migrated millions of pieces of content and delivered a workable Wordpress-based platform.',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description: 'Lean UX, ReactJS development and migration',
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
    alt:
      "A smartphone and a wide-screen computer display showing Boston University's 'AGNI' website design in two different widths",
    quote: {
      author: {
        image: MUGSHOT_BU,
        name: 'Bill Pierce',
        jobTitle: 'Editor, AGNI',
        company: 'Boston University',
      },
      text: `LeanJS understood our mindset with a ability to ‘chameleon’ themselves. A great team to be part of, always transparent - what they created for us was incredible.`,
    },
  },

  {
    title: 'FingoPay',
    anchor: 'fingo',
    supportingText: 'Onboarding app for unique finger scanning API',
    paragraphs: [
      'Combining the innovation-led space of bio-metrics with React Native was a real thrill for us and we learnt a lot!',
      'Starting with an 8-hour rapid prototyping exercise on London’s South Bank, we took the user-validated design and developed a bleeding-edge React Native app that worked perfectly for',
    ],
    highlighted: true,
    bulletpoints: [
      {
        point: 'HOW',
        description:
          'Rapid prototyping, React Native with Circle CI and card.io integration',
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
    alt:
      'Two tablets, showing two screens from the onboarding project for biometric payment system FingoPay ',
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
    title: 'ReactJS Academy',
    anchor: 'asos',
    highlighted: false,
    suportingText: 'UX/UI and rapidly iterated React website',
    paragraphs: [
      'The ReactJS Academy website is a product to market advanced training for developers and rapidly evolves from month-to-month.',
      'Since July 2018, it has undergone multiple iterations based on quantitative metrics, stakeholder research and usability testing, meeting user and business needs - both from a design and tech standpoint.',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description: 'On-site private training at the Asos offices',
      },
      {
        point: 'TIME',
        description: 'First launch - 3 weeks',
      },
      {
        point: 'RESULT',
        description:
          'Dev team now work in ReactJS, increasing productivity and code compliance',
      },
    ],
    image: CASE_STUDY_ASOS,
    alt:
      'Two images of our ReactJS training sessions where our coaches are presenting to the entire class and answering questions from individual students',
    quote: {
      author: {
        image: MUGSHOT_ASOS,
        name: 'James Norton',
        jobTitle: 'Engineering Practise Lead',
        company: 'ASOS.com',
      },
      text: `Our team had been talking about ReactJS for a while and when I realised how effecient it can be, it was time for a change. LeanJS tailored training for our needs and now we don’t work any othe way.`,
    },
  },

  {
    title: 'ABinBev',
    anchor: 'abinbev',
    highlighted: true,
    suportingText: 'Interactive festive app',
    paragraphs: [
      'The ABinBev app was a milestone project for LeanJS.',
      'With a strict timeframe and an aim to create a product that increased shopping cart value in the lead-up to Christmas, we designed and developed a highly interactive app that satisfied ABinBev’s marketing aims and delighted users.',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description: 'Rapid prototyping and developement',
      },
      {
        point: 'TIME',
        description: 'From idea to launch in 6 weeks',
      },
      {
        point: 'RESULT',
        description: '90% increase in shopping card value',
      },
    ],
    image: CASE_STUDY_ABINBEV,
    alt:
      'Three smart phones, each showing different screens from the ABinBev app project',
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
]

const CaseStudyExpoBullets = ({ content }) => (
  <Ul unstyled>
    {content.map((item, i) => (
      <Li key={`case-study-expo-${i}`}>
        <SmallIconAndSentence
          flushLeft
          verticalCenter
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
        <CaseStudyTitle>{props.title}</CaseStudyTitle>
        <SupportingText>{props.supportingText}</SupportingText>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        {props.paragraphs.map((paragraphText, i) => (
          <P key={`paragraph-${props.title}-${i}`}>{paragraphText}</P>
        ))}
        <CaseStudyExpoBullets content={props.bulletpoints} />
      </Col>
      <Col md={6}>
        <Image src={props.image} alt={props.alt} />
      </Col>
    </Row>

    {props.button ? (
      <Row>
        <Col md={6}>
          <LinkButton external={props.button.external} to={props.button.to}>
            {props.button.text}
          </LinkButton>
        </Col>
      </Row>
    ) : null}
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
