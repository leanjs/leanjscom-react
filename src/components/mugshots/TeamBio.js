import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'
import Link from '../navigation/Link'
import {
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_SMALL,
  SPACING_XXXLARGE,
  DARKGREY,
  FONT_SIZE_MEDIUM,
} from '../../config/styles'
import { LOGO_TWITTER, LOGO_LINKEDIN } from '../../resources/icons'
import url from 'url'
import LargeIconAndPoints from '../bulletedsections/LargeIconAndPoints'

const Bio = styled.div`
  color: ${props => props.color || 'black'};
  padding-bottom: ${SPACING_MEDIUM};

  img {
    align-self: center;
    min-width: ${SPACING_XXXLARGE};
    width: ${SPACING_XXXLARGE};
  }
`

const BioInner = styled.div`
  display: flex;
  align-items: flex-start;
`

const PersonImage = styled.div`
  display: flex;
`

const PersonSpecs = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: ${SPACING_STANDARD};
  padding-right: ${SPACING_MEDIUM};
`

const Spec = styled.div`
  margin-top: ${props => (props.first ? 0 : SPACING_SMALL)};
`

const PersonName = styled.span`
  font-size: ${FONT_SIZE_MEDIUM};
`

const OptionalSpec = props =>
  props.show ? <Spec>{props.children}</Spec> : null

const OptionalLinkSpec = props => (
  <OptionalSpec show={props.show}>
    <Link to={props.to}>{props.text}</Link>
  </OptionalSpec>
)

const formatTwitter = twitterURL => {
  const { pathname } = url.parse(twitterURL)
  const matches = pathname.match(/^\/([^\/]+)/)

  if (matches) {
    return `@${matches[1]}`
  }

  return twitterURL
}

const TeamBio = ({ image, name, hometown, specialisms, ...props }) => (
  <Bio {...props}>
    <BioInner>
      <PersonImage>
        <img src={image} alt={name} />
      </PersonImage>
      <PersonSpecs>
        <Spec first>
          <PersonName>{name}</PersonName>
        </Spec>
        <OptionalLinkSpec
          show={props.twitter ? true : false}
          to={props.twitter ? props.twitter : null}
          text={props.twitter ? formatTwitter(props.twitter) : null}
        />
        <OptionalLinkSpec
          show={props.linkedin ? true : false}
          to={props.linkedin ? props.linkedin : null}
          text={props.linkedin ? props.linkedin : null}
        />
        <Spec>Hometown: {hometown}</Spec>
        <Spec>
          <LargeIconAndPoints
            heading="Ask me about"
            points={specialisms.split(/\s*,\s*/g)}
            color={DARKGREY}
            flushLeft
          />
        </Spec>
      </PersonSpecs>
    </BioInner>
  </Bio>
)

export default TeamBio
