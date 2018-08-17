import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Section from '../layout/Section'
import { Link as LinkScroll } from 'react-scroll'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { H1 as BaseH1, H2 as BaseH2 } from '../text'
import { WHITE, EXTRADARKGREY } from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import { ANCHOR_STYLE } from '../navigation/Link'
import Menu from '../navigation/menu'
import ConcentricCircles from '../decoration/ConcentricCircles'
import withWidth from 'react-width'

// import { Link as LinkScroll } from 'react-scroll'

const H1 = styled(BaseH1)`
  font-size: 64px !important;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  @media (max-width: ${SCREEN_SM_MAX}) {
    font-size: 58px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    font-size: 40px;
  }
`
const HeaderSection = styled(Section)`

  background-color: ${EXTRADARKGREY};
  min-height: 700px;
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
    padding: 175px 0;
  }
`

const HeaderTop = styled.div`
  position: relative;

  /* Don't let the concentic circles extend below the top part of the header (mobiles only) */
  @media (max-width: ${SCREEN_SM_MAX}) {
    overflow: hidden;
  }
`

const backgroundCirclesSize = ({ isMobile, windowWidth }) => {
  if (windowWidth !== null) {
    return windowWidth * (isMobile ? 0.85 : 0.25) * 2
  } else {
    return 2000
  }
}

const BackgroundCircles = styled.div`
  position: absolute;
  z-index: -1;

  top: -${props => backgroundCirclesSize(props) * 0.3}px;
  right: -${props => backgroundCirclesSize(props) * 0.4}px;
`

const H2Header = styled(BaseH2)`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 48px !important;
  color: ${WHITE};
`

const TITLE_BACKGROUND = `
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
`
const TitleBackground = styled.span`
  &:first-child  {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 20px;
  }
  ${TITLE_BACKGROUND};
`

const WHITE_TEXT = `
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
  padding: 15px;
  ul {
    margin-top: 20px;
  }
`

const Links = styled.div`
  ${TITLE_BACKGROUND};
  ${WHITE_TEXT};
  padding: 15px;
`

const Children = styled.div`
  ${WHITE_TEXT};
`

const StyledLinkScroll = styled(LinkScroll)`
  ${ANCHOR_STYLE};
`

const Header = ({
  titleLines = [],
  subtitle,
  links = [],
  bgImg,
  children,
  ...props
}) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'
  const isMobile =
    canIGuessTheScreenSizeUsingJS &&
    window.innerWidth <= parseFloat(SCREEN_SM_MAX)
  const windowWidth = canIGuessTheScreenSizeUsingJS ? window.innerWidth : null

  return (
    <HeaderSection top bgImg={bgImg}>
      <HeaderTop>
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
            <Col md={8}>
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
                <Ul inline>
                  {links.map((link, i) => (
                    <Li key={i}>
                      <StyledLinkScroll
                        smooth={true}
                        duration={500}
                        to={link.to}
                      >
                        {link.text}
                      </StyledLinkScroll>
                    </Li>
                  ))}
                </Ul>
              </Links>
            ) : (
              ''
            )}

            <Children>{children}</Children>
          </Col>
        </Row>
      </Grid>
    </HeaderSection>
  )
}

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.array,
  bgImg: PropTypes.string,
}

export default Header
