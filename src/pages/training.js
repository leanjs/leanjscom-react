import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ValueBullet from '../components/bullets/ValueBullet'
import BenefitBullet from '../components/bullets/BenefitBullet'
import LargeIconAndPoints from '../components/bulletedsections/LargeIconAndPoints'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import Mugshot from '../components/mugshots/Mugshot'
import {
  WHITE,
  EXTRADARKGREY,
  FONT_SIZE_LARGE,
  SPACING_LARGE,
} from '../config/styles'
import { SCREEN_XS_MAX } from '../components/utils'
import {
  MUGSHOT_ASOS,
  LONDON_BOOTCAMP,
  ALEX_TEACHING,
  CLIENTS_LOGOS,
} from '../resources/images'
import Link from '../components/navigation/Link'
import LinkButton from '../components/buttons/LinkButton'
import Line from '../components/sections/Line'
import Grid, {
  Col,
  Row,
  SingleColRow,
  SingleCellGrid,
} from '../components/layout/Grid'
import {
  Trainline,
  ASOS,
  Blockchain,
  JohnLewis,
  FinancialTimes,
  SainBurys,
  Tesco,
  Telegraph,
} from '../components/logos'
import { H2, H3, P, Blockquote } from '../components/text'
import Topic from '../components/labels/Topic'
import YouTube from '../components/videos/YouTube'
import Instagram from '../components/feeds/Instagram'
import { styleChildLinkColor } from '../components/navigation/Link'
import HighlightedItem from '../components/decoration/HighlightedItem'

const TitleText = styled(P)`
  font-size: ${FONT_SIZE_LARGE};
`
const InlineItems = styled.div`
  padding-left: ${SPACING_LARGE};
`

const BootcampCol = styled(Col)`
  ${styleChildLinkColor(EXTRADARKGREY)};
`

const CompanyList = styled(Ul)`
  overflow: hidden;
  li {
    margin-left: 10px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

const TrainingPage = () => (
  <React.Fragment>
    <Header
      titleLines={['Training']}
      subtitle=""
      bulletPoints={[
        {
          bullet: BenefitBullet,
          icon: 'team',
          sentence:
            'Take your team and digital solutions further into the future',
        },
        {
          bullet: BenefitBullet,
          icon: 'react',
          sentence:
            'Pioneering the first cutting-edge ReactJS training in Europe',
        },
      ]}
    />

    <Section>
      <Grid>
        <Row>
          <Col md={12}>
            <H3>Trusted by...</H3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <P>
              <HighlightedItem>
                <CompanyList inline>
                  <Li>
                    <Link to="/case-studies#asos">
                      <ASOS colour={EXTRADARKGREY} height={35} />
                    </Link>
                  </Li>
                  <Li>
                    <JohnLewis colour={EXTRADARKGREY} height={35} />
                  </Li>
                  <Li>
                    <FinancialTimes colour={EXTRADARKGREY} height={30} />
                  </Li>
                  <Li>
                    <SainBurys colour={EXTRADARKGREY} height={35} />
                  </Li>
                  <Li>
                    <Tesco
                      colour={EXTRADARKGREY}
                      secColour={EXTRADARKGREY}
                      stroke={EXTRADARKGREY}
                      height={40}
                    />
                  </Li>
                  <Li>
                    <Telegraph colour={EXTRADARKGREY} height={40} />
                  </Li>
                  <Li>
                    <Trainline colour={EXTRADARKGREY} height={48} y={5} />
                  </Li>
                </CompanyList>
              </HighlightedItem>
            </P>
          </Col>
          <Col md={6}>
            <P>
              <YouTube url="https://www.youtube.com/embed/2-IPT7Plsfc" />
            </P>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* <Mugshot
              image={MUGSHOT_ASOS}
              name="James Norton"
              jobTitle="Engineering Practise Lead"
              company="ASOS.com"
              quote="LeanJS helped our team understand the complex in the simplest and easiest way. At the end of training, we all felt like masters of React!"
            /> */}
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark>
      <Grid>
        <Row>
          <Col md={6}>
            <H2>What we love to teach</H2>

            <P>
              At LeanJS we practise what we preach! All our trainers code and
              design real world products with the methods we teach.
            </P>
            <P>
              Training your team in leading edge tech means you can rely on your
              team to get the job done.
            </P>
          </Col>
          <Col md={6}>
            <Line>
              <H3>
                ReactJS ecosystem <Topic>Code</Topic>
              </H3>
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
            </Line>

            <Line>
              <H3>
                Product and UX design <Topic>Design</Topic>
              </H3>
              <P>
                Learn how to develop an idea into a working, tested design with
                design thinking.
              </P>
            </Line>

            <Line>
              <H3>
                Lean / Agile <Topic>Process</Topic>
              </H3>
              <P>
                Let us guide you to change your processes to work quicker and
                more efficiently
              </P>
            </Line>

            <P>
              <LinkButton scroll to="contact" hasArrows>
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
          <Col md={6}>
            <H2>Corporate training - tailored for your team's needs</H2>

            <P>
              We love diving into an existing team and teaching the latest tech
              tools and processes.
            </P>

            <P>It's intense, fun and very rewarding. Plus, it really works!</P>

            <Ul unstyled>
              <Li>
                <SmallIconAndSentence
                  icon={<BenefitBullet image="team" />}
                  sentence="Immersive training for groups of max 20 participants"
                  flushLeft
                />
              </Li>
              <Li>
                <SmallIconAndSentence
                  icon={<BenefitBullet image="globe" />}
                  sentence="You choose the date and location - anywhere in the world!"
                  flushLeft
                />
              </Li>
            </Ul>
          </Col>
          <Col md={6}>
            <img src={ALEX_TEACHING} />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark>
      <Grid>
        <Row>
          <Col md={6}>
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
            <P>
              <LinkButton to="/team-principles" hasArrows>
                Meet the LeanJS team
              </LinkButton>
            </P>
          </Col>
          <Col md={6}>
            <Instagram />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <BootcampCol>
          <SingleColRow>
            <H2>Our next trainings...</H2>
          </SingleColRow>
          <SingleColRow>
            <Link to="https://reactjs.academy/react-native-bootcamp-london">
              React Native Training
            </Link>
          </SingleColRow>
          <SingleColRow>London | 17 September 2018</SingleColRow>
          <SingleColRow>
            <img src={LONDON_BOOTCAMP} />
          </SingleColRow>
          <SingleColRow>
            <LinkButton to="https://reactjs.academy" external>
              Visit ReactJS Academy website
            </LinkButton>
          </SingleColRow>
        </BootcampCol>
      </Grid>
    </Section>
  </React.Fragment>
)

export default TrainingPage
