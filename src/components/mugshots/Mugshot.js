import React from 'react'
import styled from 'styled-components'
import { requireFrom } from '../utils'

const MugshotInner = styled.div`
  color: ${props => props.color || 'black'};
  display: flex;
`

const PersonImage = styled.div`
  display: flex;
`

const PersonSpecs = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1em;
`

const Spec = styled.div`
  margin-top: 0.5em;
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
  </MugshotInner>
)

export default Mugshot
