import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'

import { SPACING_STANDARD, SPACING_SMALL } from '../../config/styles'

import { Blockquote2 } from '../text'

const MugshotInner = styled.div`
  color: ${props => props.color || 'black'};
  display: flex;

  img {
    align-self: center;
  }
`

const PersonImage = styled.div`
  display: flex;
`

const PersonSpecs = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: ${SPACING_STANDARD};
`

const Spec = styled.div`
  margin-top: ${SPACING_SMALL};
`

const Mugshot = ({ image, name, jobTitle, company, ...props }) => (
  <MugshotInner {...props}>
    <PersonImage>
      <img style={{ maxHeight: '10em' }} src={image} />
    </PersonImage>
    <PersonSpecs>
      <Spec>
        <strong>{name}</strong>
      </Spec>
      <Spec>{jobTitle}</Spec>
      <Spec>{company}</Spec>
    </PersonSpecs>
    {props.quote ? <Blockquote2 padLeft>{props.quote}</Blockquote2> : null}
  </MugshotInner>
)

export default Mugshot
