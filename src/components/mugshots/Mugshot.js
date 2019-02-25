import React from 'react'
import styled from 'styled-components'

import { Blockquote2 } from '../text'
import SmallIconAndSentence from '../bulletedsections/SmallIconAndSentence'

import { MEDIUMGREY } from '../../config/styles'

const Mugshot = ({ image, quote, name, jobTitle, company }) => {
  const img = <img src={image} />
  const text = (
    <React.Fragment>
      <Blockquote2>{quote}</Blockquote2>
      <p>
        <strong>
          {name}
          <br /> ({jobTitle}, {company})
        </strong>
      </p>
    </React.Fragment>
  )
  return <SmallIconAndSentence icon={img} sentence={text} />
}

const MugshotWrapper = styled.div`
  border: 1px solid ${MEDIUMGREY};
`

const MugshotWithStyles = props => (
  <MugshotWrapper>
    <Mugshot {...props} />
  </MugshotWrapper>
)

export default MugshotWithStyles
