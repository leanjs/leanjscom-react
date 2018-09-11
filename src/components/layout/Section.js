import React from 'react'
import styled, { css } from 'styled-components'
import {
  SCREEN_SM_MIN,
  SCREEN_XS_MAX,
  SCREEN_MD_MIN,
  SCREEN_LG_MIN,
} from '../utils'

import {
  EXTRADARKGREY,
  WHITE,
  FONT_FAMILY,
  SPACING_SMALL,
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_XXLARGE,
  LAYOUT_SPACING_SMALL,
  LAYOUT_SPACING_MEDIUM,
  LINE_HEIGHT_STANDARD,
} from '../../config/styles'

const getHorizontalPadding = padding => `
  padding-left:${padding};
  padding-right:${padding};
`

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
    props.padded
      ? `

    ${getHorizontalPadding(SPACING_STANDARD)};

    @media(min-width: ${SCREEN_SM_MIN}) {
      ${getHorizontalPadding(SPACING_MEDIUM)};
    }

    @media(min-width: ${SCREEN_MD_MIN}) {
      ${getHorizontalPadding(LAYOUT_SPACING_SMALL)};
    }

    @media(min-width: ${SCREEN_LG_MIN}) {
      ${getHorizontalPadding(LAYOUT_SPACING_MEDIUM)};
    }

  `
      : ``}
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
