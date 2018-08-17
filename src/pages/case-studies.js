import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import Topic from '../components/labels/Topic'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY } from '../config/styles'
import { MUGSHOT_JAMES_NORTON } from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import CaseStudyExpoBullets from '../components/bullets/CaseStudyExpoBullets'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import caseStudies from '../content/caseStudies.json'
import HighlightedItem from '../components/decoration/HighlightedItem'

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
            <H2>ABInBev</H2>
          </Col>
          <Col xs={6}>
            <Topic dark>app</Topic>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={caseStudies.CaseStudyContent.ABInBev}
            />
          </Col>
          <Col md={6}>
            <Image src={'https://picsum.photos/300/200/?random'} />
          </Col>
        </Row>

        <Row>
          <Col>
            <P quote>
              “We never thought it possible! We only had a couple of months
              until Christmas but LeanJS sorted us out.
            </P>
            <P quote>
              They were highly professional yet friendly and very effective.”
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={MUGSHOT_JAMES_NORTON}
              name="Georgina Clarke"
              jobTitle="Account Manager ABinBev"
              company="ASOS.com"
              color={DARKGREY}
            />
          </Col>
          <Col md={6}>
            <LinkButton external to="https://medium.com/leanjs">
              Blog: How apps increase <br /> shopping value by 90%
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
              <a name="fingo" />
              <H2>FingoPay</H2>
            </Col>
            <Col xs={6}>
              <Topic dark>working mvp</Topic>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <CaseStudyExpoBullets
                content={caseStudies.CaseStudyContent.FingoPay}
              />
            </Col>
            <Col md={6}>
              <Image src={'https://picsum.photos/300/200/?random'} />
            </Col>
          </Row>

          <Row>
            <Col>
              <P quote>
                “We’d been working on the platform for a while but onboarding
                was an issue.
              </P>
              <P quote>
                LeanJS came in, discovered the issues in real life and provided
                a workable solution in a fraction of the time we expected.
                Amazed.”
              </P>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Mugshot
                image={MUGSHOT_JAMES_NORTON}
                name="Georgina Clarke"
                jobTitle="Account Manager ABinBev"
                company="ASOS.com"
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
            <H2>Boston University</H2>
          </Col>
          <Col xs={6}>
            <Topic dark>website</Topic>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={caseStudies.CaseStudyContent.BostonUniversity}
            />
          </Col>
          <Col md={6}>
            <Image src={'https://picsum.photos/300/200/?random'} />
          </Col>
        </Row>

        <Row>
          <Col>
            <P quote>
              “We’d been working on the platform for a while but onboarding was
              an issue.
            </P>
            <P quote>
              LeanJS came in, discovered the issues in real life and provided a
              workable solution in a fraction of the time we expected. Amazed.”
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={MUGSHOT_JAMES_NORTON}
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
              <H2>ASOS.com</H2>
            </Col>
            <Col xs={6}>
              <Topic dark>training</Topic>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <CaseStudyExpoBullets
                content={caseStudies.CaseStudyContent.ASOScom}
              />
            </Col>
            <Col md={6}>
              <Image src={'https://picsum.photos/300/200/?random'} />
            </Col>
          </Row>
          <Row>
            <Col>
              <P quote>
                “Our team had been talking about ReactJS for a while and when I
                realised how effecient it can be, it was time for a change.
              </P>
              <P quote>
                LeanJS tailored training for our needs and now we don’t work any
                othe way.”
              </P>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Mugshot
                image={MUGSHOT_JAMES_NORTON}
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

    <Section>
      <Grid>
        <Row>
          <Col xs={6}>
            <a name="upmentoring" />
            <H2>UpMentoring</H2>
          </Col>
          <Col xs={6}>
            <Topic dark>web app</Topic>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CaseStudyExpoBullets
              content={caseStudies.CaseStudyContent.UpMentoring}
            />
          </Col>
          <Col md={6}>
            <Image src={'https://picsum.photos/300/200/?random'} />
          </Col>
        </Row>

        <Row>
          <Col>
            <P quote>
              “I’ve been used UpMentoring for a while and it really helps with
              getting class feedback.
            </P>
            <P quote>Using it means I can improve classes and teach</P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Mugshot
              image={MUGSHOT_JAMES_NORTON}
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
    </Section>
  </React.Fragment>
)

export default CaseStudies
