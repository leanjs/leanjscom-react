import React from 'react'
import styled from 'styled-components'

import ContactInstructions from '../contact/ContactInstructions'
import Ul, { Li } from '../layout/Ul'

import {
  FONT_FAMILY,
  WHITE,
  SPACING_SMALL,
  LAYOUT_SPACING_MEDIUM,
} from '../../config/styles'

import { SCREEN_LG_MIN } from '../utils'

import Link from '../navigation/Link'

const FooterInner = styled.footer`
  padding: 0 ${SPACING_SMALL};
  @media (min-width: ${SCREEN_LG_MIN}) {
    padding: 0 ${LAYOUT_SPACING_MEDIUM};
  }
`

const CurrentYear = () => new Date().getFullYear()

const Footer = () => (
  <FooterInner>
    <Ul inline>
      <Li>
        <Link to="/terms-and-conditions">Privacy Policy</Link>
      </Li>
    </Ul>
    <Ul inline right>
      <Li>
        © LeanJS <CurrentYear />
      </Li>
    </Ul>
  </FooterInner>
)

export default Footer
