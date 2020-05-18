import React from 'react'
import styled from 'styled-components'
import Link, { styleChildLinkColor, MailtoLink } from '../navigation/Link'
import Grid, { Col, Row } from '../layout/Grid'
import Section from '../layout/Section'

import {
  LIGHTGREY,
  MEDIUMGREY,
  DARKGREY,
  EXTRADARKGREY,
  WHITE,
  SPACING_MEDIUM,
} from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import ContactUsBullet from '../bullets/ContactUsBullet'
import { H2, H4, P } from '../text'
import ContactForm from './ContactForm'
import Ul, { Li } from '../layout/Ul'

const LinkList = styled(Ul)`
  padding-left: 0;
  list-style: none;
  margin-left: 0;
  ${styleChildLinkColor(WHITE)};
`

const ContactInstructions = () => (
  <Section dark>
    <Grid>
      <Row>
        <H2>
          <a name="contact" />We'd love to chat
        </H2>
      </Row>
      <Row>
        <Col md={5}>
          <P>Let's start a conversation right now! Here's how:</P>
          <LinkList>
            <Li>
              <MailtoLink to="hello@leanjs.com">
                <ContactUsBullet image="email" />Email hello@leanjs.com
              </MailtoLink>
            </Li>
            <Li>
              <Link to="https://twitter.com/leanjscom">
                <ContactUsBullet image="twitter" />Tweet us @leanjscom
              </Link>
            </Li>
            <Li>
              <Link to="https://www.instagram.com/leanjscom/">
                <ContactUsBullet image="instagram" />Instagram us @leanjscom
              </Link>
            </Li>
            <Li>
              <ContactUsBullet image="office" />Visit us at WeWork Moorgate, 1
              Fore St Ave, London, EC2Y 9DT -{' '}
              <Link to="https://goo.gl/maps/jsLZCb4Yi352">See on map</Link>
            </Li>
          </LinkList>
        </Col>
        <Col md={1} />
        <Col md={5}>
          <H4>Or fill out our contact form</H4>
          <ContactForm />
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default ContactInstructions
