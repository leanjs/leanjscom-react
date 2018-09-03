import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'
import Link from '../navigation/Link'
import {
  SPACING_STANDARD,
  SPACING_LARGE,
  SPACING_SMALL,
  SPACING_XXLARGE,
} from '../../config/styles'
import { LOGO_TWITTER, LOGO_LINKEDIN } from '../../resources/icons'
import url from 'url'

const Bio = styled.div`
  color: ${props => props.color || 'black'};
  padding-bottom: ${SPACING_LARGE};

  img {
    align-self: center;
    min-width: ${SPACING_XXLARGE};
    width: ${SPACING_XXLARGE};
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
  padding-right: ${SPACING_LARGE};
`

const Spec = styled.div`
  margin-top: ${props => (props.first ? 0 : SPACING_SMALL)};
`

const OptionalSpec = props =>
  props.show ? <Spec>{props.children}</Spec> : null

const OptionalLinkSpec = props => (
  <OptionalSpec show={props.show}>
    <Link to={props.to}>{props.text}</Link>
  </OptionalSpec>
)

const formatTwitter = twitterURL => {
  const { hostname, pathname } = url.parse(twitterURL)
  return pathname.replace(/^\//, '@')
}

const TeamBio = ({ image, name, hometown, specialisms, ...props }) => (
  <Bio {...props}>
    <BioInner>
      <PersonImage>
        <img src={image} />
      </PersonImage>
      <PersonSpecs>
        <Spec first>
          <strong>{name}</strong>
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
        <Spec>Ask me about: {specialisms}</Spec>
      </PersonSpecs>
    </BioInner>
  </Bio>
)

export default TeamBio
