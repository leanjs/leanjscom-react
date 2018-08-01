import React from 'react'
import Header from '../components/layout/Header'
import Section from '../components/layout/Section'
import Ul, { Li } from '../components/layout/Ul'
import ActivityBullet from '../components/bullets/ActivityBullet'
import { WHITE } from '../config/styles'

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="We can help you evolve your tech. Quick snap!"
      bgImg="home"
    >
      <Ul unstyled>
        <Li>
          <ActivityBullet image="development" />
          We build badass and scalable websites, apps & digital solutions…
        </Li>
        <Li>
          <ActivityBullet image="teaching" />
          We also teach innovative tech to your team…
        </Li>
      </Ul>
    </Header>
    <Section>asd</Section>
    <Section xsBgDark>something</Section>
    <Section>What we do, how we do it</Section>
  </React.Fragment>
)

export default IndexPage
