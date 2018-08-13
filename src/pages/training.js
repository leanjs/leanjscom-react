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
import { WHITE, EXTRADARKGREY } from '../config/styles'
import Link from '../components/navigation/Link'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, Blockquote } from '../components/text'
import Topic from '../components/labels/Topic'
import YouTube from '../components/videos/YouTube'
import Instagram from '../components/feeds/Instagram'
import { LONDON_BOOTCAMP, ALEX_TEACHING, CLIENTS_LOGOS } from '../config/images'
import { styleChildLinkColor } from '../components/navigation/Link'

const TitleText = styled(P)`
  font-size: 24px;
`
const InlineItems = styled.div`
  padding-left: 50px;
`

const BootcampCol = styled(Col)`
  ${styleChildLinkColor(EXTRADARKGREY)};
`

const TrainingPage = () => (
  <React.Fragment>
    <Header titleLines={['Training']} subtitle="" bgImg="training">
      <Row>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<TrainingAspectBullet image="team" dark />}
                sentence="Take your team and digital solutions further into the future"
              />
            </Li>
          </Ul>
        </Col>
        <Col md={5}>
          <Ul unstyled>
            <Li>
              <SmallIconAndSentence
                icon={<TrainingAspectBullet image="react" dark />}
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
              <img src={CLIENTS_LOGOS} />
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <P>
              <YouTube url="https://www.youtube.com/embed/2-IPT7Plsfc" />
            </P>
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
              <Link external to="https://reactjs.academy/">
                ReactJS Academy
              </Link>{' '}
              was the first in Europe.
            </P>
            <P>
              <LinkButton external to="https://reactjs.academy/">
                Visit ReactJS Academy website
              </LinkButton>
            </P>

            <Line verticalCenter>
              Product and UX design <Topic>Design</Topic>
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
            <H2>
              Tailored private team team training - tailored for your team's
              needs
            </H2>
            <P>
              We love diving into an existing team and teaching the latest tech
              tools and processes.
            </P>
            <P>It's intense, fun and very rewarding. Plus, it really works!</P>
            <P>
              <img src={ALEX_TEACHING} />
            </P>
            <P>
              <Ul unstyled>
                <Li>
                  <SmallIconAndSentence
                    icon={<TrainingAspectBullet image="team" />}
                    sentence="Immersive training for groups of max 20 participants"
                  />
                </Li>
                <Li>
                  <SmallIconAndSentence
                    icon={<TrainingAspectBullet image="globe" />}
                    sentence="You choose the date and location - anywhere in the world!"
                  />
                </Li>
              </Ul>
            </P>
            <P>
              <LinkButton to="/case-studies#asos" dark hasArrows>
                ASOS.com team training case study
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section xsBgDark>
      <Grid>
        <Row>
          <Col>
            <H2>Our super passionate trainers &amp; coach community</H2>
            <P>At LeanJS, we have an overarching aim to help people.</P>
            <P>
              We have a core team of trainers with specialisms in development,
              design, project methodologies.
            </P>
            <P>
              With our ReactJS Academy, we’ve also created our coaching
              community - passing on knowledge and enriching the tech community
              at the same time. Read more on the ReactJS Academy website.
            </P>
            <LinkButton to="/team-principles" hasArrows>
              Meet the LeanJS team
            </LinkButton>
            <P>
              <Instagram />
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <BootcampCol>
            <H2>Our next bootcamp...</H2>
            <P>
              <Link to="https://reactjs.academy/react-redux-graphql-bootcamp">
                ReactJS Academy bootcamp: React, Redux, &amp; GraphQL
              </Link>
            </P>
            <P>London | 20 - 26 August 2018</P>
            <P>
              <img src={LONDON_BOOTCAMP} />
            </P>
            <P>
              <LinkButton to="https://reactjs.academy" external>
                Visit ReactJS Academy website
              </LinkButton>
            </P>
          </BootcampCol>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default TrainingPage
