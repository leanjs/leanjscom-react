import React from 'react'
import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ActivityBullet from '../components/bullets/ActivityBullet'
import { WHITE } from '../config/styles'
import Button from '../components/buttons/Button'
import Grid, { Col, Row } from '../components/layout/Grid'

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="We can help you evolve your <br /> tech. Quick snap!"
      bgImg="home"
    >
      <Row>
        <Col md={4}>
          <Ul unstyled>
            <Li>
              <ActivityBullet image="development" />
              We build badass and scalable websites, apps & digital solutions…
            </Li>
          </Ul>
          <Button>Building products >></Button>
        </Col>
        <Col md={4}>
          <Ul unstyled>
            <Li>
              <ActivityBullet image="teaching" />
              We also teach innovative tech to your team…
            </Li>
          </Ul>
          <Button>Training services >></Button>
        </Col>
      </Row>
    </Header>
    <Section>asd</Section>
    <Section xsBgDark>something</Section>
    <Section>What we do, how we do it</Section>
  </React.Fragment>
)

export default IndexPage
