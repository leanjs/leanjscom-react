import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import {
  WHITE,
  SPACING_LARGER,
  DARKGREY,
  FONT_SIZE_STANDARD,
  FONT_FAMILY,
  LINE_HEIGHT_LARGER,
} from '../../config/styles'

const addIconButtonStyles = props => `
	border:none;
	background:${WHITE};

	.contents {
		height:100%;
		width:100%;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
	}

	.icon {
		background: transparent url(${props.image}) center/contain no-repeat scroll;
		height:50%;
		width:50%;
		margin:0 auto;
	}

	width:${SPACING_LARGER};
	height:${SPACING_LARGER};

	font-size:${FONT_SIZE_STANDARD};
	${FONT_FAMILY}
	line-height: ${LINE_HEIGHT_LARGER};
`

const IconButtonInner = styled.button`
  ${addIconButtonStyles};
  padding: 0;
  &:active {
    transform: translate(1px, 1px);
  }
`

const LinkIconButtonInner = styled(({ image, ...rest }) => <Link {...rest} />)`
  ${addIconButtonStyles};
  color: ${DARKGREY};
  text-decoration: none;
  display: inline-block;
`

const Contents = props => (
  <div className="contents">
    <div className="icon" />
    <div className="text">{props.text}</div>
  </div>
)

export const IconButton = props => (
  <IconButtonInner {...props}>
    <Contents {...props} />
  </IconButtonInner>
)

export const LinkIconButton = props => (
  <LinkIconButtonInner {...props}>
    <Contents {...props} />
  </LinkIconButtonInner>
)

export default IconButton
