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
import { ANCHOR_STYLE, ScrollingLink } from '../navigation/Link'
import Menu from '../navigation/menu'
import { HideSingleComponentUsingCss } from '../utils'
import ConcentricCircles from '../decoration/ConcentricCircles'
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

const backgroundCirclesSize = ({ isMobile, windowWidth }) => {
  if (windowWidth !== null) {
    return (windowWidth * (isMobile ? 0.85 : 0.25) * 2) / 18
  } else {
    return 2000 / 18
  }
}

const BackgroundCircles = styled.div`
  position: absolute;
  z-index: -1;

  top: -${props => backgroundCirclesSize(props) * 0.3}rem;
  right: -${props => backgroundCirclesSize(props) * 0.4}rem;
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

const Links = styled.div`
  ${TITLE_BACKGROUND};
  ${WHITE_TEXT};
  padding: ${SPACING_STANDARD};
`

const BulletPointsWrapper = styled.div`
  ${WHITE_TEXT};
`

const BulletPointsRow = ({
  points,
  includeButton = true,
  includeIconAndSentence = true,
  namespace = '',
}) => (
  <Row>
    {points.map((point, i) => (
      <BulletPoint
        key={`header-bullet-${namespace}-${i}`}
        {...point}
        includeButton={includeButton}
        includeIconAndSentence={includeIconAndSentence}
      />
    ))}
  </Row>
)

const BulletPointsRows = ({
  hideXs = false,
  hideSm = false,
  hideMd = false,
  hideLg = false,
  rows,
}) => {
  const namespace = `${hideXs ? `xs-` : ``}${hideSm ? `sm-` : ``}${
    hideMd ? `md-` : ``
  }${hideLg ? `lg-` : ``}`
  return (
    <HideSingleComponentUsingCss
      xs={hideXs}
      sm={hideSm}
      md={hideMd}
      lg={hideLg}
    >
      <div>
        {rows.map((row, i) => {
          const includeButton =
            row.includeButton || typeof row.includeButton === 'undefined'
          const includeIconAndSentence =
            row.includeIconAndSentence ||
            typeof row.includeIconAndSentence === 'undefined'
          const rowNamespace = `${namespace}-${i}`
          return (
            <BulletPointsRow
              key={`${namespace}-${i}`}
              includeButton={includeButton}
              includeIconAndSentence={includeIconAndSentence}
              namespace={rowNamespace}
              points={row.points}
            />
          )
        })}
      </div>
    </HideSingleComponentUsingCss>
  )
}

const BulletPoints = ({ points }) => (
  <BulletPointsWrapper>
    <BulletPointsRows
      hideMd
      hideLg
      rows={[
        {
          namespace: '',
          points,
        },
      ]}
    />
    <BulletPointsRows
      hideXs
      hideSm
      rows={[
        {
          includeButton: false,
          points,
        },
        {
          includeIconAndSentence: false,
          points,
        },
      ]}
    />
  </BulletPointsWrapper>
)

const BulletPoint = props => {
  const Bullet = props.bullet ? props.bullet : ActivityBullet

  return (
    <Col md={5}>
      {props.includeIconAndSentence ? (
        <SmallIconAndSentence
          flushLeft
          icon={<Bullet image={props.icon} />}
          sentence={props.sentence}
          largeHorizontalSpacing
        />
      ) : null}

      {props.includeButton && props.button ? (
        <LinkButton to={props.button.to} hasArrows>
          {props.button.text}
        </LinkButton>
      ) : null}
    </Col>
  )
}

const Header = ({
  titleLines = [],
  subtitle,
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
          <ConcentricCircles
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
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {subtitle ? (
                <SubTitleBackground>
                  <H2Header>{subtitle}</H2Header>
                </SubTitleBackground>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Grid>
      </HeaderTop>

      <Grid>
        <Row>
          <Col>
            {links && links.length ? (
              <Links>
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

            {bulletPoints ? (
              <BulletPoints points={bulletPoints.slice(0, 2)} />
            ) : null}
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

const allowCookiesCookieName = 'allow-cookies'

class HeaderContainer extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)

    const { cookies } = props

    this.state = {
      showCookieNotification: !cookies.get(allowCookiesCookieName),
    }
  }

  handleDismissCookieNotification = () => {
    const { cookies } = this.props

    const tenYearsInMs = 311040000000
    cookies.set(allowCookiesCookieName, 1, {
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
    if (!this.state.shown) {
      return null
    }
  }
}

export default withCookies(HeaderContainer)
