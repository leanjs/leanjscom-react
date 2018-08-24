import React from 'react'
import styled from 'styled-components'
import { FONT_SIZE_LARGE, LINE_HEIGHT_EXTRALARGE } from '../../config/styles'

export default styled.strong`
  ${props =>
    props.large
      ? `
		font-size: ${FONT_SIZE_LARGE};
		line-height: ${LINE_HEIGHT_EXTRALARGE};
	`
      : null};
`
