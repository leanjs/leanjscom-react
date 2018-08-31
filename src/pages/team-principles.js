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
} from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
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
          <Col>
            <P>
              Our team come from various backgrounds, life experiences and
              countries but all have a shared vision….
            </P>
          </Col>
        </Row>
        <Row>
          <Col>
            <Line>
              <H3>Our core values</H3>
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
                              Be unafraid to learn from everyone and believe in
                              teaching what we know
                            </P>
                            <H3>Supporting principles</H3>
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
                              Always aim to treat others how we would want to be
                              treated
                            </P>
                            <H3>Supporting principles</H3>
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
                              Ensure what we do is meaningful and always
                              people-centred
                            </P>
                            <H3>Supporting principles</H3>
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
              Not-for-proft partnerships and discounts
              <ValueGrid>
                <Row>
                  <ValueCol sm={7}>
                    Do you work for a not-for-profit organisation and share our
                    values? Then we’d love to hear from you!
                  </ValueCol>
                </Row>

                <Row>
                  <ValueCol sm={7}>
                    We’d love to partner with you and your team to help change
                    the world for the better.
                  </ValueCol>
                </Row>

                <Row>
                  <ValueCol sm={7}>
                    To that end, we are always open to offering discounts on our
                    training, design and development services - depending on the
                    project.
                  </ValueCol>
                </Row>
              </ValueGrid>
              <Row>
                <ValueCol>
                  <LinkButton scroll hasArrows to="contact">
                    Contact us and let's work together!
                  </LinkButton>
                </ValueCol>
              </Row>
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
              specialisms="ReactJS academy trainings, our coaching and coaches, working with LeanJS, Lean/Agile, JavaScript, functional programming, React, any crazy ideas :-)"
              hometown="London, UK"
              color={WHITE}
            />
          </Col>
          <Col md={6}>
            <TeamBio
              image={HORACIO}
              name="Horacio Hererra"
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
              specialisms="Web programming, teaching, writing short bios"
              hometown="London, UK"
              color={WHITE}
            />
          </Col>
          <Col md={6}>
            <TeamBio
              image={LUIS}
              name="Luis Novella"
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
