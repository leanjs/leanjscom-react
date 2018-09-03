import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import {
  FONT_FAMILY,
  WHITE,
  FONT_SIZE_STANDARD,
  LINE_HEIGHT_LARGER,
  FONT_WEIGHT_MEDIUMBOLD,
} from '../../config/styles'

export const ANCHOR_STYLE = `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    font-size: ${FONT_SIZE_STANDARD};
    font-weight: ${FONT_WEIGHT_MEDIUMBOLD};
    font-style: normal;
    line-height: ${LINE_HEIGHT_LARGER};
    color: inherit;
    ${FONT_FAMILY}
`

const BasicLink = styled.a`
  ${ANCHOR_STYLE};
`

export const styleChildLinkColor = color => `
  a {
    color: ${color};
  }
  a:link {
    color: ${color};
  }
  a:visited {
    color: ${color};
  }
  a:hover {
    color: ${color};
  }
  a:active {
    color: ${color};
  }
`

const RouterLink = styled(GatsbyLink)`
  ${ANCHOR_STYLE};
`

const Link = ({ to = '', children = '', ...rest }) => {
  if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = rest
    return (
      <BasicLink {...rest} target={target} href={to}>
        {children}
      </BasicLink>
    )
  } else if (to && to[0] === '#') {
    return (
      <BasicLink href={to} {...rest}>
        {children}
      </BasicLink>
    )
  } else if (!to) {
    return <BasicLink {...rest}>{children}</BasicLink>
  } else {
    return (
      <RouterLink {...rest} to={to}>
        {children}
      </RouterLink>
    )
  }
}

export const MailtoLink = props => (
  <a href={`mailto:${props.to}`}>{props.children}</a>
)

export const ScrollingLink = styled(props => {
  return <LinkScroll {...{ smooth: true, duration: 500, ...props }} />
})`
  ${ANCHOR_STYLE};
`

export const LogoLink = styled(Link)`
  ${props =>
    props.logo
      ? `
    background-image:url(${props.logo});
    background-position:0.5em center;
    background-size:auto 1em;
    background-repeat:no-repeat;
    background-scroll:scroll;
    padding-left:2em;
  `
      : ``};
`

export default Link
