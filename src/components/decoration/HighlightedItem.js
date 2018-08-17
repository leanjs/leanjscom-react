import React from 'react'
import styled from 'styled-components'

import { MEDIUMLIGHTGREY } from '../../config/styles'

const HighlightedItem = styled.div`
  & > * {
    border: 1px solid ${MEDIUMLIGHTGREY};
  }
`

export default HighlightedItem
