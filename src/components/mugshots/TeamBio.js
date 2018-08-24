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
`

const BioInner = styled.div`
  display: flex;
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
  margin-top: ${SPACING_SMALL};
`

const AskMeAbout = styled.p`
  padding-right: ${SPACING_LARGE};
`

const TeamBio = ({ image, name, hometown, specialisms, ...props }) => (
  <Bio {...props}>
    <BioInner>
      <PersonImage>
        <img
          style={{
            float: 'left',
            width: SPACING_XXLARGE,
            height: SPACING_XXLARGE,
          }}
          src={image}
        />
      </PersonImage>
      <PersonSpecs>
        <Spec>
          <strong>{name}</strong>
        </Spec>
        <Spec>Hometown: {hometown}</Spec>
      </PersonSpecs>
    </BioInner>
    <AskMeAbout>Ask me about: {specialisms}</AskMeAbout>
  </Bio>
)

export default TeamBio
