import React from 'react'
import styled from 'styled-components'
import { WHITE } from '../../config/styles'

const defaultSize = 3

const StyledCheckbox = styled.div`
  .displayCheckbox {
    background: ${WHITE};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    .displayCheckboxInner {
      background-color: transparent;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjg1IDJsLTExLjI4NSAxMS41NjctNS4yODYtNS4wMTEtMy43MTQgMy43MTYgOSA4LjcyOCAxNS0xNS4yODV6Ii8+PC9zdmc+);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-scroll: scroll;
      height: 90%;
      width: 90%;
      margin: auto;

      display: ${props => (props.checked ? 'block' : 'none')};
    }
  }
  height: ${props => (props.size ? props.size : defaultSize)}em;
  width: ${props => (props.size ? props.size : defaultSize)}em;
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = props => (
  <StyledCheckbox {...props}>
    <div
      className="displayCheckbox"
      onClick={() => props.onChange({ target: { checked: !props.checked } })}
    >
      <div className="displayCheckboxInner" />
    </div>
    <input type="hidden" value={props.checked ? '1' : '0'} />
  </StyledCheckbox>
)

export default Checkbox
