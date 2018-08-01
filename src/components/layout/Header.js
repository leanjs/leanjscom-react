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

// import { Link as LinkScroll } from 'react-scroll'

const H1 = styled(BaseH1)`
  font-size: 64px;
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

  background-color: ${EXTRADARKGREY}; min-height: 700px;
  position: relative;
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
const H2Header = styled(BaseH2)`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 48px !important;
  color: ${WHITE};
`

const TITLE_BACKGROUND = `
  background-color: ${EXTRADARKGREY};
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

const SubTitleBackground = styled.div`
  ${TITLE_BACKGROUND} padding: 15px;
  a {
    color: ${WHITE};
  }
  ul {
    margin-top: 20px;
  }
`

const StyledLinkScroll = styled(LinkScroll)`
  ${ANCHOR_STYLE};
`

const Header = ({ titleLines = [], subtitle, links = [], bgImg }) => (
  <HeaderSection top bgImg={bgImg}>
    <Grid>
      <Row>
        <Col>
          <H1>
            {titleLines.map((line, i) => (
              <TitleBackground key={i} children={line} />
            ))}
          </H1>
          {subtitle || (links && links.length) ? (
            <SubTitleBackground>
              <H2Header dangerouslySetInnerHTML={{ __html: subtitle }} />
              {links && links.length ? (
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
              ) : (
                ''
              )}
            </SubTitleBackground>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Grid>
  </HeaderSection>
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.array,
  bgImg: PropTypes.string,
}

export default Header
