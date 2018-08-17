import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import {
  EXTRADARKGREY,
  WHITE,
  FONT_FAMILY,
  SPACING_LARGE,
} from '../../config/styles'

const Section = styled.section`
  ${FONT_FAMILY}
  padding-top: ${props => (props.top ? '0' : SPACING_LARGE)};
  padding-bottom: ${SPACING_LARGE};
  background-color: ${props => props.dark && EXTRADARKGREY};
  color: ${props => props.dark && WHITE};
`

Section.displayName = 'Section'

export default Section
