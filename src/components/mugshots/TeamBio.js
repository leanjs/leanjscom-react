import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'
import LogoLink from '../navigation/Link'
import {
  SPACING_STANDARD,
  SPACING_LARGE,
  SPACING_SMALL,
  SPACING_XXLARGE,
} from '../../config/styles'
import { LOGO_TWITTER, LOGO_LINKEDIN } from '../../resources/icons'

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

const getLogo = logoName => {
  switch (logoName) {
    case 'twitter':
      return LOGO_TWITTER
    case 'linkedin':
      return LOGO_LINKEDIN
    default:
      throw new Error('Unknown logo')
  }
}

const TeamBio = ({
  image,
  name,
  contact,
  hometown,
  specialisms,
  LogoLink,
  ...props
}) => (
  <Bio {...props}>
    <BioInner>
      <PersonImage>
        <img src={image} />
      </PersonImage>
      <PersonSpecs>
        <Spec first>
          <strong>{name}</strong>
        </Spec>
        {contact ? (
          <Spec>
            <LogoLink to={contact.to} logo={getLogo(contact.logo)}>
              {contact.text}
            </LogoLink>
          </Spec>
        ) : null}
        <Spec>Hometown: {hometown}</Spec>
        <Spec>Ask me about: {specialisms}</Spec>
      </PersonSpecs>
    </BioInner>
  </Bio>
)

TeamBio.defaultProps = {
  LogoLink,
}

export default TeamBio
