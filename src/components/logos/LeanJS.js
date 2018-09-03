import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { LOGO_LEANJS } from '../../resources/icons'
import { SPACING_EXTRALARGE } from '../../config/styles'

const defaultSize = SPACING_EXTRALARGE
const getSize = props => (props.size ? props.size : defaultSize)

export const LeanJSLogo = styled.div`
  width: ${getSize};
  height: ${getSize};
  background: transparent url(${LOGO_LEANJS}) center/contain no-repeat scroll;
  display: inline-block;
`

export const LinkedLeanJSLogo = () => (
  <Link to="/">
    <LeanJSLogo />
  </Link>
)
