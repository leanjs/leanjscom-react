import React from 'react'
import styled from 'styled-components'
import { WHITE, SPACING_SMALL } from '../../config/styles'

const defaultSize = 3

const StyledCheckbox = styled.div`
  .displayCheckbox {
    background: ${WHITE};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    cursor: pointer;

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

      visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
  }

  .actualCheckbox {
    position: absolute;
    left: -9999999px;
  }

  height: ${props => (props.size ? props.size : defaultSize)}em;
  width: ${props => (props.size ? props.size : defaultSize)}em;
  display: inline-block;
  vertical-align: middle;
`

const onClick = props => () =>
  props.onChange({ target: { checked: !props.checked } })

const Label = props => {
  if (!props.label) {
    return null
  }

  // Note: have not used a Styled Component for this (and other) divs because they do not fire onClick events
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'inline',
        marginLeft: SPACING_SMALL,
      }}
      onClick={onClick(props)}
    >
      {props.label}
    </div>
  )
}

const Checkbox = props => (
  <div>
    <StyledCheckbox {...props}>
      <div className="displayCheckbox" onClick={onClick(props)}>
        <div className="displayCheckboxInner" />
      </div>
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onClick={props.onChange}
        className="actualCheckbox"
      />
    </StyledCheckbox>{' '}
    <Label {...props} for={props.id} />
  </div>
)

export default Checkbox
