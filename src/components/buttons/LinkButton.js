import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { DEFAULT_BUTTON_STYLES } from './Button.js'

const LinkButton = styled(Link)`
  ${DEFAULT_BUTTON_STYLES};
  text-decoration: none;
  display: inline-block;
  font-weight: normal;
  &:link {
    color: inherit !important;
  }
  &:visited {
    color: inherit !important;
  }
  &:hover {
    color: inherit !important;
  }
  &:active {
    color: inherit !important;
  }
`

export default LinkButton
