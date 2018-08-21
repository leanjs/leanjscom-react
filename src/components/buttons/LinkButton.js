import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { DEFAULT_BUTTON_STYLES, getForegroundColor } from './Button.js'
import { NEW_WINDOW } from '../../config/icons'

// NB cunning destructure method to remove invalid DOM properties before passing them to the underlying dom element
// and thereby generating a React warning, as per https://github.com/styled-components/styled-components/issues/1268
const LinkButton = styled(({ hasArrows, ...rest }) => <Link {...rest} />)`
  ${DEFAULT_BUTTON_STYLES};
  text-decoration: none !important;
  display: inline-block;
  font-weight: normal;
  &:link {
    color: ${getForegroundColor} !important;
  }
  &:visited {
    color: ${getForegroundColor} !important;
  }
  &:hover {
    color: ${getForegroundColor} !important;
  }
  &:active {
    color: ${getForegroundColor} !important;
  }
  ${props =>
    props.external
      ? `
    background-image:url(${NEW_WINDOW});
    background-position:0.5em center;
    background-size:auto 1em;
    background-repeat:no-repeat;
    background-scroll:scroll;
    padding-left:2em;
  `
      : null};
`

LinkButton.passProps = false

export default LinkButton
