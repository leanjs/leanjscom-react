import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'

import {
  EXTRADARKGREY,
  WHITE,
  FONT_FAMILY,
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_XXLARGE,
  LINE_HEIGHT_STANDARD,
} from '../../config/styles'

const Section = styled.section`
  ${FONT_FAMILY}
  padding-top: ${props => (props.top ? '0' : SPACING_XXLARGE)};
  padding-bottom: ${props =>
    props.dark && props.lastOnPage ? 0 : SPACING_XXLARGE};
  @media (max-width:${SCREEN_XS_MAX}) {
  	padding-top:${SPACING_MEDIUM};
    padding-bottom:${SPACING_MEDIUM};
  }
  background-color: ${props => props.dark && EXTRADARKGREY};
  line-height: ${LINE_HEIGHT_STANDARD};
  color: ${props => props.dark && WHITE};
  ${props =>
    props.dark && props.lastOnPage
      ? `
    margin-bottom:-${parseFloat(SPACING_XXLARGE) -
      parseFloat(SPACING_STANDARD)}rem;
  `
      : null};
`

Section.displayName = 'Section'

export default Section
