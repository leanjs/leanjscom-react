import React from 'react'
import styled from 'styled-components'

import {
  FONT_SIZE_SMALL,
  SPACING_SMALL,
  LAYOUT_SPACING_LARGE,
  WHITE,
} from '../../config/styles'

import { withCookies, Cookies } from 'react-cookie'

import PropTypes, { instanceOf } from 'prop-types'

const CookiesNotificationInner = styled.div`
  font-size: ${FONT_SIZE_SMALL};
  border: 1px dotted white;
  display: inline-block;
  padding: ${SPACING_SMALL};
  padding-right: 3rem;
  color: ${WHITE};
  max-width: ${LAYOUT_SPACING_LARGE};
`

export const CookiesNotification = props => (
  <CookiesNotificationInner>
    Using our site means you consent to our use of cookies. Find out more in our
    cookie policy.
    <button onClick={props.onNotificationDismissed}>⨯</button>
  </CookiesNotificationInner>
)

class CookiesNotificationWrapper extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    cookieName: PropTypes.string.isRequired,
  }

  static defaultProps = {
    cookieName: 'allow-cookies',
  }

  constructor(props) {
    super(props)

    const { cookies, cookieName } = props

    this.state = {
      shown: !cookies.get(cookieName),
    }
  }

  handleDismissNotification() {
    const { cookies, cookieName } = this.props

    cookies.set(cookieName, 1, { path: '/' })
    this.setState({ shown: false })
  }

  render() {
    if (!this.state.shown) {
      return null
    }

    return (
      <CookiesNotification
        onNotificationDismissed={this.handleDismissNotification}
      />
    )
  }
}

export default withCookies(CookiesNotificationWrapper)
