import React from 'react'
import styled from 'styled-components'

import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import BenefitBullet from '../components/bullets/BenefitBullet'
import ActivityBullet from '../components/bullets/ActivityBullet'
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence'
import { WHITE, DARKGREY, LIGHTGREY, EXTRADARKGREY } from '../config/styles'
import { MUGSHOT_JAMES_NORTON } from '../config/images'
import LinkButton from '../components/buttons/LinkButton'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Mugshot from '../components/mugshots/Mugshot'
import Image from '../components/elements/Image'
import Line from '../components/sections/Line'
import Link, { styleChildLinkColor } from '../components/navigation/Link'

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

const ValueCol = styled(Col)`
  ${styleChildLinkColor(EXTRADARKGREY)};
`

const Team = () => (
  <React.Fragment>
    <Header
      titleLines={['Our team & principles']}
      links={teamLinks}
      bgImg="home"
    />
    <Section>
      <Row>
        <Col center>
          <H2>Our values and principles</H2>
        </Col>
      </Row>
      <Row>
        <Col center>
          <P>
            Our team come from various backgrounds, life experiences and
            countries but all have a shared vision….
          </P>
        </Col>
      </Row>
      <Row>
        <Col>
          <Line verticalCenter>Our core values</Line>
        </Col>
      </Row>
      <Row>
        <ValueCol md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="head" />}
            sentence="Be unafraid to learn from everyone and believe in teaching what we know"
          />
          <Link dark>Supporting principles</Link>
          <Ul>
            <Li>Keep searching, keep learning</Li>
            <Li>Share - because sharing is caring</Li>
            <Li>Build aligned minds, not just teams</Li>
            <Li>More than the sum of our parts</Li>
          </Ul>
        </ValueCol>
        <ValueCol md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="heart" />}
            sentence="Always aim to treat others how we would want to be treated"
          />
          <Link>Supporting principles</Link>
          <Ul>
            <Li>Treat others how you want to be treated</Li>
            <Li>Transparently true to our methodology</Li>
          </Ul>
        </ValueCol>
        <ValueCol md={4}>
          <SmallIconAndSentence
            icon={<BenefitBullet image="people" />}
            sentence="Ensure what we do is meaningful and always people-centred"
          />
          <Link dark>Supporting principles</Link>
          <Ul>
            <Li>People-centred products - always</Li>
            <Li>Be unafraid</Li>
            <Li>Purpose over profits</Li>
          </Ul>
        </ValueCol>
      </Row>
      <Row>
        <Col center>
          <LinkButton external to="https://medium.com/leanjs">
            Blog: How we created <br /> our brand identity
          </LinkButton>
        </Col>
      </Row>

      <Row>
        <Col>
          <Line verticalCenter>Not-for-proft partnerships and discounts</Line>
        </Col>
      </Row>
      <Row>
        <Col center md={4}>
          <P>
            Do you work for a not-for-profit organisation and share our values?
            Then we’d love to hear from you!
          </P>
        </Col>
        <Col center md={4}>
          <P>
            We’d love to partner with you and your team to help change the world
            for the better.
          </P>
        </Col>
        <Col center md={4}>
          <P>
            To that end, we are always open to offering discounts on our
            training, design and development services - depending on the
            project.
          </P>
        </Col>
      </Row>
      <Row>
        <Col center>
          <LinkButton hasArrows to="#contact">
            Contact us and let's work together!
          </LinkButton>
        </Col>
      </Row>
    </Section>
    <Section dark>
      <Grid>
        <Row>
          <Col>
            <H2>Our team</H2>
            <P>
              The team all have their specialisms and are always happy to talk
              so feel free to contact any of them!
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Mugshot
              image={MUGSHOT_JAMES_NORTON}
              name="Alex Lobera"
              jobTitle=""
              company="Hometown: Barcelona, Spain"
              color={DARKGREY}
            />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default Team
