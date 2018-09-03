import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'

import {
  EXTRADARKGREY,
  WHITE,
  FONT_FAMILY,
  SPACING_STANDARD,
  SPACING_LARGE,
  SPACING_EXTRALARGE,
  LINE_HEIGHT_STANDARD,
} from '../../config/styles'

const Section = styled.section`
  ${FONT_FAMILY}
  padding-top: ${props => (props.top ? '0' : SPACING_EXTRALARGE)};
  padding-bottom: ${props =>
    props.dark && props.lastOnPage ? 0 : SPACING_EXTRALARGE};
  @media (max-width:${SCREEN_XS_MAX}) {
  	padding-top:${SPACING_LARGE};
    padding-bottom:${SPACING_LARGE};
  }
  background-color: ${props => props.dark && EXTRADARKGREY};
  line-height: ${LINE_HEIGHT_STANDARD};
  color: ${props => props.dark && WHITE};
  ${props =>
    props.dark && props.lastOnPage
      ? `
    margin-bottom:-${parseFloat(SPACING_EXTRALARGE) -
      parseFloat(SPACING_STANDARD)}rem;
  `
      : null};
`

Section.displayName = 'Section'

export default Section
