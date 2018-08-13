import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { EXTRADARKGREY, WHITE, FONT_FAMILY } from '../../config/styles'
import { styleChildLinkColor } from '../navigation/Link'

const Section = styled.section`
  ${FONT_FAMILY}
  padding-top: ${props => (props.top ? '150px' : '30px')};
  ${props => (props.top ? 'margin-top: -117px;' : '')} padding-bottom: 30px;
  background-color: ${props => props.xsBgDark && EXTRADARKGREY};
  color: ${props => props.xsBgDark && WHITE};
  ${props => styleChildLinkColor(props.xsBgDark ? WHITE : EXTRADARKGREY)};
`

Section.displayName = 'Section'

export default Section
