import React from 'react'
import styled from 'styled-components'

import { MEDIUMLIGHTGREY } from '../../config/styles'

const HighlightedItem = styled.div`
  & > * {
    border: 1px solid ${MEDIUMLIGHTGREY};
    padding: 0 2rem;
  }
`

export default HighlightedItem
