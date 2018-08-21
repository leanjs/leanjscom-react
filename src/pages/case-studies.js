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
import CaseStudyExpoBullets from '../components/bullets/CaseStudyExpoBullets'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import caseStudies from '../content/caseStudies.json'
import HighlightedItem from '../components/decoration/HighlightedItem'

const CaseStudyTitle = styled(H2)`
  no-wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CaseStudies = () => (
  <React.Fragment>
    <Header
      titleLines={['Case Studies']}
      links={caseStudies.CaseStudyLinks}
      bgImg="home"
    >
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="industry" />}
                sentence="Digital solutions built and user tested for over 20+ sectors"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<ActivityBullet image="teaching" />}
                sentence="Over 1500 training participants in just 2 years"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>

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
              content={caseStudies.CaseStudyContent.ABInBev}
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
              name="Georgina Clarke"
              jobTitle="Account Manager ABinBev"
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
                content={caseStudies.CaseStudyContent.FingoPay}
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
                Blog: Rapid prototyping <br /> IRL, in a pub
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
              content={caseStudies.CaseStudyContent.BostonUniversity}
            />
          </Col>
          <Col md={6}>
            <Image src={CASE_STUDY_BU} />
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
                content={caseStudies.CaseStudyContent.ASOScom}
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
              content={caseStudies.CaseStudyContent.UpMentoring}
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
