import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import TrainingAspectBullet from '../components/bullets/TrainingAspectBullet'
import ValueBullet from '../components/bullets/ValueBullet'
import BenefitBullet from '../components/bullets/BenefitBullet'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import Mugshot from '../components/mugshots/Mugshot'
import { WHITE } from '../config/styles'
import Link from '../components/navigation/Link'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Blockquote } from '../components/text'
import { Topic } from '../components/labels/Topic'

const TitleText = styled(P)`
  font-size: 24px;
`
const InlineItems = styled.div`
  padding-left: 50px;
`

const IndexPage = () => (
  <React.Fragment>
    <Header titleLines={['Training']} subtitle="" bgImg="training">
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<TrainingAspectBullet image="team" />}
                sentence="Take your team and digital solutions further into the future"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<TrainingAspectBullet image="react" />}
                sentence="Pioneering the first cutting-edge ReactJS training in Europe"
              />
            </Li>
          </Ul>
        </Col>
      </Row>
    </Header>

    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <P>Trusted by...</P>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <P>
              (TODO:Image here containing logos for asos, trainline, FT,
              Blockchain, ABInBev)
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <P>(TODO:Video here)</P>
          </Col>
        </Row>
        <Row>
          <Col>
            <Blockquote>
              LeanJS helped our team understand the complex in the simplest and
              easiest way. At the end of training, we all felt like masters of
              React!
            </Blockquote>
          </Col>
        </Row>

        <Row>
          <Col>
            <Mugshot
              image="james-norton-asos"
              name="James Norton"
              jobTitle="Engineering Practise Lead"
              company="ASOS.com"
            />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section xsBgDark>
      <Grid>
        <Row>
          <Col>
            <H2>What we love to teach</H2>
          </Col>
        </Row>

        <Row>
          <Col>
            <P>
              At LeanJS we practise what we preach! All our trainers code and
              design real world products with the methods we teach.
            </P>
            <P>
              Training your team in leading edge tech means you can rely on your
              team to get the job done.
            </P>

            <Line verticalCenter>
              ReactJS ecosystem <Topic>Code</Topic>
            </Line>
            <P>
              Created in 2016, our{' '}
              <Link to="https://reactjs.academy/">ReactJS Academy</Link> was the
              first in Europe.
            </P>
            <P>
              <LinkButton external to="https://reactjs.academy/">
                Visit ReactJS Academy website
              </LinkButton>
            </P>

            <Line verticalCenter>
              Product &amp; UX design <Topic>Design</Topic>
            </Line>
            <P>
              Learn how to develop an idea into a working, tested design with
              design thinking.
            </P>

            <Line verticalCenter>
              Lean / Agile <Topic>Process</Topic>
            </Line>
            <P>
              Let us guide you to change your processes to work quicker and more
              efficiently
            </P>
            <P>
              <LinkButton to="#contact" hasArrows>
                What's your tech training needs? Contact us now!
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
            <H2>What we do, how we do it</H2>
            <P>
              We work exclusivity in the iterative, incremental ‘Lean’ way (thus
              the name!). This ensures:
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage
