import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'

import {
  SPACING_STANDARD,
  SPACING_LARGE,
  SPACING_SMALL,
  SPACING_XXLARGE,
} from '../../config/styles'

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
        <Spec>Hometown: {hometown}</Spec>
        <Spec>Ask me about: {specialisms}</Spec>
      </PersonSpecs>
    </BioInner>
  </Bio>
)

export default TeamBio
