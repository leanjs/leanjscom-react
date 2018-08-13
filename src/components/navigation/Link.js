import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import { FONT_FAMILY, WHITE, EXTRADARKGREY } from '../../config/styles'

export const ANCHOR_STYLE = `
    cursor: pointer;
    text-decoration: underline;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.5;
    color: ${props => (props.dark ? WHITE : EXTRADARKGREY)};
    ${FONT_FAMILY}
`

const LinkPseudoClasses = ['link', 'visited', 'hover', 'active']

const styleLinks = (selector, styles) => `
  ${selector}, ${LinkPseudoClasses.map(
  pseudoclass => `${selector}:${pseudoclass}`
).join(', ')} {
    ${ANCHOR_STYLE}
  }
`

const BasicLink = styled.a`
  ${styleLinks('&', ANCHOR_STYLE)};
`

export const styleChildLinkColor = color => `
  ${styleLinks('a', `color: ${color};`)}
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

export default Link
