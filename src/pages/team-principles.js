import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import SmallIconAndSentences from '../components/bulletedsections/SmallIconAndSentences'
import { WHITE, DARKGREY, LIGHTGREY, EXTRADARKGREY } from '../config/styles'
import {
  ALEX,
  LENA,
  RICHARD,
  HORACIO,
  WILL,
  LUIS,
  PAUL,
  ALEX_RICH_LAPTOP,
} from '../resources/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, H3a, P, Strong } from '../components/text'
import TeamBio from '../components/mugshots/TeamBio'
import Image from '../components/elements/Image'
import Line from '../components/sections/Line'
import Link, { styleChildLinkColor } from '../components/navigation/Link'
import Hr from '../components/decoration/Hr'

const teamLinks = [
  {
    text: 'Our values',
    to: 'ourValues',
  },
  {
    text: 'Not-for-profit discounts',
    to: 'notForProfitDiscounts',
  },
  {
    text: 'Our team members',
    to: 'teamMembers',
  },
]

const ValueGrid = styled(Grid)`
  padding: 0;
`

const NoVerticalMarginRow = styled(Row)`
  margin-top: 0;
  margin-bottom: 0;
`

const ValueCol = styled(Col)`
  ${styleChildLinkColor(EXTRADARKGREY)};
  padding: 0;
`

const Team = () => (
  <React.Fragment>
    <Header titleLines={['Our Team and Principles']} links={teamLinks} />
    <Section>
      <Grid>
        <Row>
          <Col>
            <a name="ourValues" />
            <H2>Our values and principles</H2>
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <P>
              Our team are a boutique team of specialists, coming from various
              backgrounds, life experiences and countries but all have a shared
              vision…
            </P>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Line>
              <H3a>Our core values</H3a>
              <ValueGrid>
                <NoVerticalMarginRow>
                  <SmallIconAndSentences
                    wrapWithCols
                    bulletType={BenefitBullet}
                    flushLeft
                    items={[
                      {
                        image: 'head',
                        sentence: (
                          <React.Fragment>
                            <P>
                              <Strong>Be unafraid to learn from everyone and believe in
                              teaching what we know</Strong>
                            </P>
                            <P>Supporting principles:</P>
                            <Ul>
                              <Li>Keep searching, keep learning</Li>
                              <Li>Share - because sharing is caring</Li>
                              <Li>Build aligned minds, not just teams</Li>
                              <Li>More than the sum of our parts</Li>
                            </Ul>
                          </React.Fragment>
                        ),
                      },
                      {
                        image: 'heart',
                        sentence: (
                          <React.Fragment>
                            <P>
                              <Strong>Always aim to treat others how we would want to be
                              treated</Strong>
                            </P>
                            <P>Supporting principles:</P>
                            <Ul>
                              <Li>Treat others how you want to be treated</Li>
                              <Li>Transparently true to our methodology</Li>
                            </Ul>
                          </React.Fragment>
                        ),
                      },
                      {
                        image: 'people',
                        sentence: (
                          <React.Fragment>
                            <P>
                             <Strong>Ensure what we do is meaningful and always
                              people-centred</Strong>
                            </P>
                            <P>Supporting principles:</P>
                            <Ul>
                              <Li>People-centred products - always</Li>
                              <Li>Be unafraid</Li>
                              <Li>Purpose over profits</Li>
                            </Ul>
                          </React.Fragment>
                        ),
                      },
                    ]}
                  />
                </NoVerticalMarginRow>
              </ValueGrid>

              <LinkButton
                external
                to="https://medium.com/leanjs/open-source-branding-leanjs-sprint-1-8caf048396d0"
              >
                Blog: How we created our brand identity
              </LinkButton>
            </Line>
          </Col>
        </Row>

        <Row>
          <Col>
            <a name="notForProfitDiscounts" />
            <Line>
              <H3a>Not-for-proft partnerships and discounts</H3a>
              <ValueGrid>
                <Row>
                  <Col sm={6}>
                    <P>Do you work for a not-for-profit organisation and share our
                    values? Then we’d love to hear from you!</P>

                    <P>We’d love to partner with you and your team to help change
                    the world for the better.</P>

                    <P>To that end, we are always open to offering discounts on our
                    training, design and development services - depending on the
                    project.</P>
                  <LinkButton scroll hasArrows to="contact">
                    Contact us now
                  </LinkButton>
                  <LinkButton hasArrows to="/case-studies">
                    Case studies
                  </LinkButton>
                  </Col>
                  <Col sm={1}>
                  </Col>
                  <Col sm={4}>
                    <P>
                      <img src={ALEX_RICH_LAPTOP} />
                    </P>
                  </Col>
                </Row>
              </ValueGrid>
            </Line>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section dark lastOnPage>
      <Grid>
        <Row>
          <Col>
            <a name="teamMembers" />
            <H2>Our team</H2>
            <P>
              The team all have their specialisms and are always happy to talk
              so feel free to contact any of them!
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TeamBio
              image={ALEX}
              name="Alex Lobera"
              twitter="https://twitter.com/alex_lobera"
              specialisms="React, GraphQL, Lean, UX, Agile, strategy, mentoring,
              high-performance teams, company culture, latin dance"
              hometown="Barcelona, Spain"
              color={WHITE}
            />
          </Col>
          <Col md={6}>
            <TeamBio
              image={LENA}
              name="Lena Tregub"
              twitter="https://twitter.com/lenatregub"
              specialisms="Communication with clients, email marketing, reportage photography"
              hometown="Kiev, Ukraine"
              color={WHITE}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TeamBio
              image={RICHARD}
              name="Richard Moss"
              twitter="https://twitter.com/ric9176"
              specialisms="ReactJS academy trainings, our coaching and coaches, working with LeanJS, Lean/Agile, JavaScript, functional programming, React, any crazy ideas :-)"
              hometown="London, UK"
              color={WHITE}
            />
          </Col>
          <Col md={6}>
            <TeamBio
              image={HORACIO}
              name="Horacio Hererra"
              twitter="https://twitter.com/hhg2288"
              specialisms="Design Sprints, Technical Analytics, Marketing Attribution,
              photography, video production, mvps, design systems, branding,
              typography, teaching, user behaviour, Disney movies, American
              Football :P"
              hometown="Panama City, Panama"
              color={WHITE}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TeamBio
              image={WILL}
              name="Will Voelcker"
              linkedin="https://linkedin.com/in/willv"
              specialisms="Web programming, teaching, writing short bios"
              hometown="London, UK"
              color={WHITE}
            />
          </Col>
          <Col md={6}>
            <TeamBio
              image={LUIS}
              name="Luis Novella"
              twitter="https://twitter.com/novellaluis"
              specialisms="Digital and business transformation, change management, business strategy, management consultant, start-ups, Lean/Agile."
              hometown="Caracas, Venezuela"
              color={WHITE}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TeamBio
              image={PAUL}
              name="Paul Woodley"
              twitter="https://twitter.com/paulw_design"
              specialisms="User research, rapid prototyping, user testing information
              architecture, design workshops and sprints, UI, accessibility,
              print design, branding, social media marketing, badass Spotify
              playlists"
              hometown="Chelmsford, UK"
              color={WHITE}
            />
          </Col>
        </Row>

        <Row lastOnPage>
          <Col>
            <Hr />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default Team
