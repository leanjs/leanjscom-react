import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  input {
    height: 3em;
    width: 3em;
    background-color: white;
  }
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = props => (
  <StyledCheckbox>
    <input type="checkbox" {...props} />
  </StyledCheckbox>
)

export default Checkbox
