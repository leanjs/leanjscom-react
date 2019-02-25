import React from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import styled, { css } from 'styled-components'
import { withCookies, Cookies } from 'react-cookie'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { H1 as BaseH1, H2 as BaseH2 } from '../text'
import {
  WHITE,
  EXTRADARKGREY,
  FONT_SIZE_MEDIUM,
  LINE_HEIGHT_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRALARGE,
  SPACING_SMALL,
  SPACING_STANDARD,
  LAYOUT_SPACING_MEDIUM,
  LAYOUT_SPACING_EXTRALARGE,
  FONT_WEIGHT_EXTRABOLD,
} from '../../config/styles'
import {
  SCREEN_XS_MAX,
  SCREEN_SM_MIN,
  SCREEN_SM_MAX,
  SCREEN_MD_MIN,
  SCREEN_MD_MAX,
  SCREEN_LG_MIN,
} from '../utils'
import { ScrollingLink } from '../navigation/Link'
import Menu from '../navigation/menu'
import { HideSingleComponentUsingCss } from '../utils'
import withWidth from 'react-width'
import SmallIconAndSentence from '../bulletedsections/SmallIconAndSentence'
import ActivityBullet from '../bullets/ActivityBullet'
import LinkButton from '../buttons/LinkButton'
import CookiesNotification from '../notifications/Cookies'

const H1 = styled(BaseH1)`
  font-size: ${FONT_SIZE_EXTRALARGE} !important;
  font-weight: ${FONT_WEIGHT_EXTRABOLD};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
`
const HeaderSection = styled(Section)`

  background-color: ${EXTRADARKGREY};
  min-height: ${LAYOUT_SPACING_EXTRALARGE};
  position: relative;
  z-index:2;

  /* Don't let the concentic circles extend below the header */
  overflow:hidden;


  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-size: cover;
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: 100vh;
    padding: ${LAYOUT_SPACING_MEDIUM} 0;
  }
`

const HeaderTop = styled.div`
  position: relative;

  /* Don't let the concentic circles extend below the top part of the header (mobiles only) */
  @media (max-width: ${SCREEN_SM_MAX}) {
    overflow: hidden;
  }

  /* Adjust position of the burger menu if the cookie notice is showing */
  ${props =>
    props.showCookieNotification
      ? `
    .bm-burger-button {
      @media(max-width:${SCREEN_XS_MAX}) {
        top:7.4rem;
      }
      @media(min-width:${SCREEN_SM_MIN}) and (max-width:${SCREEN_MD_MAX}) {
        top:5.2rem;
      }
    }
  `
      : ``};
`

const H2Header = styled(BaseH2)`
  margin-bottom: 0;
`

const TITLE_BACKGROUND = `
  padding-left: ${SPACING_STANDARD};
  padding-right: ${SPACING_STANDARD};
  display: inline-block;
`
const TitleBackground = styled.span`
  &:first-child  {
    padding-top: ${SPACING_STANDARD};
  }
  &:last-child {
    padding-bottom: ${SPACING_STANDARD};
  }
  ${TITLE_BACKGROUND};
`

const WHITE_TEXT = `
  color: ${WHITE};
  a {
    color: ${WHITE};
  }
  li {
    color: ${WHITE};
  }
`

const SubTitleBackground = styled.div`
  ${TITLE_BACKGROUND};
  ${WHITE_TEXT};
  padding: ${SPACING_STANDARD};
  ul {
    margin-top: ${SPACING_STANDARD};
  }
`

const Intro = styled.div`
  ${WHITE_TEXT};
  padding: ${SPACING_STANDARD};
`

const Links = styled.div`
  ${TITLE_BACKGROUND};
  ${WHITE_TEXT};
  padding: ${SPACING_STANDARD};
`
const LinksDescription = styled.span`
  padding-right: ${SPACING_STANDARD};
`

const BulletPointsWrapper = styled.div`
  ${WHITE_TEXT};
`

const BulletPointsDiv = ({
  points,
  includeButton = true,
  includeSentence = true,
  namespace = 'bulletpoints',
}) => (
  <div>
    {points.map((point, i) => (
      <BulletPoint
        key={`header-bullet-${namespace}-${i}`}
        {...point}
        includeButton={includeButton}
        includeSentence={includeSentence}
      />
    ))}
  </div>
)

const SupportingText = styled.div`
  font-size: ${FONT_SIZE_MEDIUM};
  line-height: ${LINE_HEIGHT_LARGE};
`

const BulletPoint = props => {
  const Bullet = props.bullet ? props.bullet : ActivityBullet

  return (
    <Col md={5}>
      {props.includeSentence ? (
        <SupportingText>{props.sentence}</SupportingText>
      ) : null}

      {props.includeButton && props.button ? (
        <LinkButton to={props.button.to} hasArrows>
          {props.button.text}
        </LinkButton>
      ) : null}
    </Col>
  )
}

const backgroundCirclesSize = ({ isMobile, windowWidth }) => {
  if (windowWidth !== null) {
    return (windowWidth * (isMobile ? 0.85 : 0.25) * 2) / 27
  } else {
    return 2000 / 27
  }
}

const BackgroundCircles = styled.div`
  position: absolute;
  z-index: -1;

  top: 0;
  right: 0;

  @media (max-width: ${SCREEN_SM_MAX}) {
    right: -13rem;
    opacity: 0.5;
  }
`

const BackgroundZigZag = styled.div`
  background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMTIiIHZpZXdCb3g9IjAgMCA2MzUgMTAxMiIgd2lkdGg9IjYzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTk2MTk0NyAuMDg3MTU1NzQgLjA4NzE1NTc0IC45OTYxOTQ3IDk2Mi40Nzk2NjggLTEwNi4wODMzMjgpIj48cGF0aCBkPSJtNjM2LjkyNC00NC43NDMgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NiAzNi44NDEgNTIuNTU1LTczLjY4MiAxMDUuMTExIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODIgMTA1LjExMiA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU1IDM2Ljg0MSA1Mi41NTYtNzMuNjgyIDEwNS4xMTEiIHN0cm9rZT0iIzM4NjhiZSIgc3Ryb2tlLXdpZHRoPSI0MyIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0xMjMuODYxMTA2IDM5NC4yNTgwNTkpIi8+PHBhdGggZD0ibTQzNy41OTkgNTUuODM1IDczLjY4MSAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODEgMTA1LjExMSA3My42ODEgMTA1LjExMS0zNi44NDEgNTIuNTU2IDM2Ljg0MSA1Mi41NTUtNzMuNjgxIDEwNS4xMTIgNzMuNjgxIDEwNS4xMTEtMzYuODQxIDUyLjU1NSAzNi44NDEgNTIuNTU2LTczLjY4MSAxMDUuMTExIiBzdHJva2U9IiMzODY4YmUiIHN0cm9rZS13aWR0aD0iNDMiIHRyYW5zZm9ybT0ibWF0cml4KC44NjYwMjU0IC0uNSAuNSAuODY2MDI1NCAtMjAwLjg1NDU5MyAzMDguMDcwNDU2KSIvPjxwYXRoIGQ9Im01ODEuOTczLTIwLjYxIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODIgMTA1LjExMSA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU2IDM2Ljg0MSA1Mi41NTUtNzMuNjgyIDEwNS4xMTIgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NSAzNi44NDEgNTIuNTU2LTczLjY4MiAxMDUuMTExIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNDMiIHRyYW5zZm9ybT0ibWF0cml4KC44NjYwMjU0IC0uNSAuNSAuODY2MDI1NCAtMTQzLjI4OTY0NCAzNzAuMDE1NzY4KSIvPjxwYXRoIGQ9Im0zODUuNjM3IDc5LjcwNiA3My42ODEgMTA1LjExMi0zNi44NDEgNTIuNTU1IDM2Ljg0MSA1Mi41NTYtNzMuNjgxIDEwNS4xMTEgNzMuNjgxIDEwNS4xMTEtMzYuODQxIDUyLjU1NSAzNi44NDEgNTIuNTU2LTczLjY4MSAxMDUuMTExIDczLjY4MSAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODEgMTA1LjExMSIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjQzIiB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDI1NCAtLjUgLjUgLjg2NjAyNTQgLTIxOS43NTE4MTUgMjg1LjI4NzA2MykiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTEuNzUgMjU3LjYzNikiPjxjaXJjbGUgY3g9IjM1NS4xOTUiIGN5PSIzNTUuNzY4IiBmaWxsPSIjZmZmIiByPSIyMzEiLz48ZyBzdHJva2Utd2lkdGg9IjMxIj48Y2lyY2xlIGN4PSIzNTMuNjU3IiBjeT0iMzU1LjQwMSIgcj0iNDguNSIgc3Ryb2tlPSIjNGE0YTRhIi8+PGNpcmNsZSBjeD0iMzU1LjI4MiIgY3k9IjM1Ni43NjQiIHI9IjEwOCIgc3Ryb2tlPSIjNGE0YTRhIi8+PGNpcmNsZSBjeD0iMzU1LjI4MiIgY3k9IjM1Ni43NjQiIHI9IjE3MCIgc3Ryb2tlPSIjNGE0YTRhIi8+PGNpcmNsZSBjeD0iMzUzLjc0NCIgY3k9IjM1Ni4zOTciIHI9IjIzMS41IiBzdHJva2U9IiM0YTRhNGEiLz48cGF0aCBkPSJtMzU1LjY5MjgzOCA2NDguNzI0MzM5YzE2Mi4wOTU1NzQgMCAyOTMuNS0xMzEuMTgwNTY4IDI5My41LTI5MyAwLTE2MS44MTk0MzEtMTMxLjQwNDQyNi0yOTIuOTk5OTk5Ni0yOTMuNS0yOTIuOTk5OTk5NnMtMjkzLjUwMDAwMDEgMTMxLjE4MDU2ODYtMjkzLjUwMDAwMDEgMjkyLjk5OTk5OTZjMCAxNjEuODE5NDMyIDEzMS40MDQ0MjYxIDI5MyAyOTMuNTAwMDAwMSAyOTN6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1kYXNoYXJyYXk9IjUiLz48cGF0aCBkPSJtMzU1LjE5NDc0MSA3MTAuNzY3OTE3YzE5Ni4wNjEwODYgMCAzNTUtMTU4LjkzODkxNCAzNTUtMzU1cy0xNTguOTM4OTE0LTM1NC45OTk5OTk3Ny0zNTUtMzU0Ljk5OTk5OTc3Yy0xOTYuMDYxMDg3IDAtMzU1LjAwMDAwMDQzIDE1OC45Mzg5MTM3Ny0zNTUuMDAwMDAwNDMgMzU0Ljk5OTk5OTc3czE1OC45Mzg5MTM0MyAzNTUgMzU1LjAwMDAwMDQzIDM1NXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSIvPjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSI0MyI+PHBhdGggZD0ibTUyOC45MTMgNC4wMDQgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NSAzNi44NDEgNTIuNTU2LTczLjY4MiAxMDUuMTExIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODIgMTA1LjExMSA3My42ODIgMTA1LjExMi0zNi44NDEgNTIuNTU1IDM2Ljg0MSA1Mi41NTYtNzMuNjgyIDEwNS4xMTEiIHN0cm9rZT0iIzM4NjhiZSIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0xNjIuNzA1MzM2IDM0Ni43ODM0MTgpIi8+PHBhdGggZD0ibTM1OC41NjQgMTAzLjA1IDczLjY4MiAxMDUuMTEyLTM2Ljg0MSA1Mi41NTUgMzYuODQxIDUyLjU1Ni03My42ODIgMTA1LjExMSA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU1IDM2Ljg0MSA1Mi41NTYtNzMuNjgyIDEwNS4xMTEgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NiAzNi44NDEgNTIuNTU1LTczLjY4MiAxMDUuMTExIiBzdHJva2U9IiMzODY4YmUiIHRyYW5zZm9ybT0ibWF0cml4KC44NjYwMjU0IC0uNSAuNSAuODY2MDI1NCAtMjM1LjA1MDc3NSAyNzQuODc4NTY2KSIvPjxwYXRoIGQ9Im00ODQuMTg2IDMwLjI1NCA3My42ODEgMTA1LjExMS0zNi44NCA1Mi41NTYgMzYuODQgNTIuNTU1LTczLjY4MSAxMDUuMTExIDczLjY4MSAxMDUuMTExLTM2Ljg0IDUyLjU1NiAzNi44NCA1Mi41NTUtNzMuNjgxIDEwNS4xMTIgNzMuNjgxIDEwNS4xMTEtMzYuODQgNTIuNTU1IDM2Ljg0IDUyLjU1Ni03My42ODEgMTA1LjExMSIgc3Ryb2tlPSIjZjJmMmYyIiB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDI1NCAtLjUgLjUgLjg2NjAyNTQgLTE4MS44MjI2MTggMzI3LjkzNjc1MSkiLz48cGF0aCBkPSJtMzE1Ljc0MiAxMjguMTMgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NiAzNi44NDEgNTIuNTU1LTczLjY4MiAxMDUuMTExIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1Ni03My42ODIgMTA1LjExMSA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU1IDM2Ljg0MSA1Mi41NTYtNzMuNjgyIDEwNS4xMTEiIHN0cm9rZT0iI2YyZjJmMiIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0yNTMuMzI3ODM1IDI1Ni44Mjc2NDkpIi8+PHBhdGggZD0ibTI3My43NDIgMTUzLjEzIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTYgMzYuODQxIDUyLjU1NS03My42ODIgMTA1LjExMSA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU2IDM2Ljg0MSA1Mi41NTYtNzMuNjgyIDEwNS4xMTEgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NSAzNi44NDEgNTIuNTU2LTczLjY4MiAxMDUuMTExIiBzdHJva2U9IiMzODY4YmUiIHRyYW5zZm9ybT0ibWF0cml4KC44NjYwMjU0IC0uNSAuNSAuODY2MDI1NCAtMjcxLjQ1NDc2OCAyMzkuMTc3MDE0KSIvPjxwYXRoIGQ9Im0yMzEuNzQyIDE3Ni4xMyA3My42ODIgMTA1LjExMS0zNi44NDEgNTIuNTU2IDM2Ljg0MSA1Mi41NTUtNzMuNjgyIDEwNS4xMTEgNzMuNjgyIDEwNS4xMTEtMzYuODQxIDUyLjU1NiAzNi44NDEgNTIuNTU2LTczLjY4MiAxMDUuMTExIDczLjY4MiAxMDUuMTExLTM2Ljg0MSA1Mi41NTUgMzYuODQxIDUyLjU1Ni03My42ODIgMTA1LjExMSIgc3Ryb2tlPSIjZjJmMmYyIiB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDI1NCAtLjUgLjUgLjg2NjAyNTQgLTI4OC41ODE3MDEgMjIxLjI1ODQzKSIvPjwvZz48L2c+PC9zdmc+)
    left top no-repeat scroll;
  background-size: contain;
  width: ${props => props.size + `em`};
  height: ${props => props.size * 1.6 + `em`};
  position: absolute;
  top: 0;
  right: 0;
`

const Dots = styled.div`
  background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NDkiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgOTQ5IDEzMCI+CiAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcpIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDczIDEwNikiPgogICAgICA8Y2lyY2xlIGN4PSIxMTAuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxLjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjguNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjM5LjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDYuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTE5LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzcuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI0OC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE1NS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjU4LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNjQuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9Ijc1LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxODIuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxNy41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjU0LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTAuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjkzLjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTkuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIzNS41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjcyLjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMDcuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjY2LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTczLjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iODQuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTAuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMjYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNjIuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMDEuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDMuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyODEuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMTYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk0IDEwNCkiPgogICAgICA8Y2lyY2xlIGN4PSI0LjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTAuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxLjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjguNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjM5LjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDYuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTE5LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzcuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI0OC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE1NS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjU4LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNjQuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9Ijc1LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxODIuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxNy41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjU0LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTAuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjkzLjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTkuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIzNS41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjcyLjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMDcuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjY2LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTczLjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iODQuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTAuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMjYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNjIuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMDEuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDMuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyODEuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMTYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMSAtNTM4My4zMTUgNDEwMjguOTQyKSI+CiAgICAgIDxjaXJjbGUgY3g9IjQuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjExMC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjEuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyOC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzkuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE0Ni41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTkuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEzNy41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjQ4LjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTU1LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNTguNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE2NC41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNzUuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE4Mi41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjE3LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNTQuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI5MC41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iOTMuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE5OS41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjM1LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNzIuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjMwNy41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNjYuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNzMuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI4NC41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE5MC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIyNi41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI2Mi41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI5OC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEwMS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIwOC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI0My41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI4MS41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjMxNi41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NyA4MCkiPgogICAgICA8Y2lyY2xlIGN4PSI0LjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTAuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxLjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjguNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjM5LjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDYuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTE5LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzcuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI0OC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE1NS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjU4LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNjQuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9Ijc1LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxODIuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxNy41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjU0LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTAuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjkzLjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTkuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIzNS41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjcyLjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMDcuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjY2LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTczLjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iODQuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTAuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMjYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNjIuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOTguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMDEuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDMuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyODEuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMTYuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxNTYuNSAzOSkiPgogICAgICA8Y2lyY2xlIGN4PSIxMDIuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEzLjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjAuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjMxLjUiIGN5PSI4LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzguNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjQuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTEuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMi41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyOS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjQwLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTQ3LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNTAuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE1Ni41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNjcuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE3NC41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjA5LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI4NS41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTkxLjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMjcuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjU4LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTY1LjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNzYuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxODIuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMTguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI5My41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIwMC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE3OC41IDI1KSI+CiAgICAgIDxjaXJjbGUgY3g9IjEwMi41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTMuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyMC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzEuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEzOC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjExMS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIyLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTI5LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNDAuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDcuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI1MC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTU2LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI2Ny41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTc0LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDkuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI0Ni41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iODUuNSIgY3k9IjYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE5MS41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjI3LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNjQuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjU4LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTY1LjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNzYuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxODIuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMTguNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNTQuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI5My41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIwMC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIzNS41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI3My41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE1Ni41IDEyKSI+CiAgICAgIDxjaXJjbGUgY3g9IjEwMi41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTMuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEyMC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMzEuNSIgY3k9IjguNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEzOC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNC41IiBjeT0iMTkuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjExMS41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIyLjUiIGN5PSIxOS41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTI5LjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNDAuNSIgY3k9IjE5LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDcuNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI1MC41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTU2LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI2Ny41IiBjeT0iNi41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMTc0LjUiIGN5PSI0LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDkuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9Ijg1LjUiIGN5PSI2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxOTEuNSIgY3k9IjQuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIyNy41IiBjeT0iNC41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNTguNSIgY3k9IjE3LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSIxNjUuNSIgY3k9IjE2LjUiIHI9IjQuNSIvPgogICAgICA8Y2lyY2xlIGN4PSI3Ni41IiBjeT0iMTcuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE4Mi41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjIxOC41IiBjeT0iMTYuNSIgcj0iNC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjkzLjUiIGN5PSIxNy41IiByPSI0LjUiLz4KICAgICAgPGNpcmNsZSBjeD0iMjAwLjUiIGN5PSIxNi41IiByPSI0LjUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=) left top no-repeat scroll;
  background-size: auto 100%;
  width:50%;
  height:10%
  position:absolute;
  bottom:0;
  left:0;
`

const Header = ({
  titleLines = [],
  subtitle,
  intro,
  links = [],
  bulletPoints,
  ...props
}) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'
  const isMobile =
    canIGuessTheScreenSizeUsingJS &&
    window.innerWidth <= parseFloat(SCREEN_SM_MAX)
  const windowWidth = canIGuessTheScreenSizeUsingJS ? window.innerWidth : null

  return (
    <HeaderSection top>
      <HeaderTop showCookieNotification={props.showCookieNotification}>
        {props.showCookieNotification ? (
          <CookiesNotification
            onNotificationDismissed={props.handleDismissCookieNotification}
          />
        ) : null}

        <Menu />

        <BackgroundCircles isMobile={isMobile} windowWidth={windowWidth}>
          <BackgroundZigZag
            size={backgroundCirclesSize({ isMobile, windowWidth })}
          />
        </BackgroundCircles>

        <Grid>
          <Row>
            <Col>
              <H1>
                {titleLines.map((line, i) => (
                  <TitleBackground key={i} children={line} />
                ))}
              </H1>

              {subtitle ? (
                <SubTitleBackground>
                  <H2Header>{subtitle}</H2Header>
                </SubTitleBackground>
              ) : (
                ''
              )}
            </Col>
          </Row>

          <Row>
            <Col md={7}>{intro ? <Intro>{intro}</Intro> : ''}</Col>
          </Row>
        </Grid>
      </HeaderTop>

      <Grid>
        <Row>
          <Col>
            {links && links.length ? (
              <Links>
                <LinksDescription>On this page:</LinksDescription>
                <Ul inline flushLeft>
                  {links.map((link, i) => (
                    <Li key={i}>
                      <ScrollingLink to={link.to}>{link.text}</ScrollingLink>
                    </Li>
                  ))}
                </Ul>
              </Links>
            ) : (
              ''
            )}

            {/* TODO:WV:20190924:Remove pointless components and props - this was overengineered and is now simpler but needs more work*/}
            {bulletPoints ? (
              <BulletPointsWrapper>
                <BulletPointsDiv
                  includeButton={true}
                  includeSentence={true}
                  points={bulletPoints}
                />
              </BulletPointsWrapper>
            ) : null}

            <Dots />
          </Col>
        </Row>
      </Grid>
    </HeaderSection>
  )
}

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  links: PropTypes.array,
}

const cookieNotificationCookieName = 'cookie-notification-dismissed'

class HeaderContainer extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)

    const { cookies } = props

    this.state = {
      showCookieNotification: !cookies.get(cookieNotificationCookieName),
    }
  }

  handleDismissCookieNotification = () => {
    const { cookies } = this.props

    const tenYearsInMs = 311040000000
    cookies.set(cookieNotificationCookieName, 1, {
      path: '/',
      expires: new Date(Date.now() + tenYearsInMs),
    })
    this.setState({ showCookieNotification: false })
  }

  render() {
    return (
      <Header
        {...this.props}
        showCookieNotification={this.state.showCookieNotification}
        handleDismissCookieNotification={this.handleDismissCookieNotification}
      />
    )
  }
}

export default withCookies(HeaderContainer)
