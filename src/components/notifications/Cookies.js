import React from 'react'
import styled from 'styled-components'

import {
  FONT_SIZE_EXTRASMALL,
  FONT_SIZE_STANDARD,
  FONT_SIZE_LARGE,
  SPACING_SMALL,
  SPACING_STANDARD,
  LAYOUT_SPACING_LARGE,
  WHITE,
} from '../../config/styles'

import { SCREEN_MD_MAX, SCREEN_LG_MIN } from '../utils'
import Link from '../navigation/Link'

import PropTypes, { instanceOf } from 'prop-types'

const CookiesNotificationInner = styled.div`
  font-size: ${FONT_SIZE_EXTRASMALL};
  line-height: ${FONT_SIZE_STANDARD};
  border: 1px dashed white;
  display: flex;
  padding: ${SPACING_SMALL};
  color: ${WHITE};
  max-width: ${LAYOUT_SPACING_LARGE};

  button {
  	width: ${FONT_SIZE_LARGE};
  	height: ${FONT_SIZE_LARGE};
  	font-size: ${FONT_SIZE_LARGE};

  	margin: 0
  	padding: 0;

  	background: none;
  	border: none;
  	color: ${WHITE};

  	cursor:pointer;
  }
`

export const CookiesNotification = props => (
  <CookiesNotificationInner>
    <div>
      Using our site means you consent to our use of cookies. Find out more in
      our{' '}
      <Link inheritFontSize to="/terms-and-conditions">
        cookie policy
      </Link>.
    </div>
    <button onClick={props.onNotificationDismissed}>⨯</button>
  </CookiesNotificationInner>
)

const CookiesNotificationWrapper = styled.div`
  @media (max-width: ${SCREEN_MD_MAX}) {
    display: flex;
    justify-content: center;
    margin-top: ${SPACING_SMALL};
  }
  @media (min-width: ${SCREEN_LG_MIN}) {
    float: right;
    padding: ${SPACING_SMALL} ${SPACING_STANDARD} 0 0;
  }
`

const CookiesNotificationWithWrapper = props => (
  <CookiesNotificationWrapper>
    <CookiesNotification {...props} />
  </CookiesNotificationWrapper>
)

export default CookiesNotificationWithWrapper
