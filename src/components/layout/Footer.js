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

const FooterInner = styled.footer`
  padding: 0 ${SPACING_SMALL};
  @media (min-width: ${SCREEN_LG_MIN}) {
    padding: 0 ${LAYOUT_SPACING_MEDIUM};
  }
`

const Footer = () => (
  <FooterInner>
    <Ul inline>
      <Li>Privacy Policy</Li>
    </Ul>
    <Ul inline right>
      <Li>© LeanJS 2008</Li>
    </Ul>
  </FooterInner>
)

export default Footer
