import React, { Component } from 'react'
import styled from 'styled-components'
import { WHITE, SPACING_SMALL } from '../../config/styles'

const defaultSize = 3

const StyledCheckbox = styled.div`
  > div {
    display: table;
    > div {
      display: table-row;
    }
  }

  .displayCheckboxOuter,
  .labelWrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .labelWrapper {
    padding-left: ${SPACING_SMALL};
  }

  .displayCheckbox {
    background: ${WHITE};

    cursor: pointer;

    height: ${props => (props.size ? props.size : defaultSize)}em;
    width: ${props => (props.size ? props.size : defaultSize)}em;

    padding: 5%;
    box-sizing: border-box;

    .displayCheckboxInner {
      background-color: transparent;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-scroll: scroll;
      height: 100%;
      width: 100%;
      box-sizing: border-box;

      border: ${props => (props.focus ? '1px dotted grey' : 'none')};

      ${props =>
        props.checked
          ? `
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjg1IDJsLTExLjI4NSAxMS41NjctNS4yODYtNS4wMTEtMy43MTQgMy43MTYgOSA4LjcyOCAxNS0xNS4yODV6Ii8+PC9zdmc+);
      `
          : ``};
    }
  }

  .actualCheckbox {
    position: absolute;
    left: -9999999px;
  }

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
      }}
      onClick={onClick(props)}
    >
      {props.label}
    </div>
  )
}

export const Checkbox = props => (
  <StyledCheckbox {...props}>
    <div>
      <div>
        <div className="displayCheckboxOuter">
          <div className="displayCheckbox" onClick={onClick(props)}>
            <div className="displayCheckboxInner" />
          </div>
          <input
            type="checkbox"
            id={props.id}
            checked={props.checked}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            className="actualCheckbox"
          />
        </div>
        <div className="labelWrapper">
          <Label {...props} for={props.id} />
        </div>
      </div>
    </div>
  </StyledCheckbox>
)

export class CheckBoxContainer extends Component {
  state = {
    hasFocus: false,
  }

  handleFocusChange = newState => () => {
    this.setState({
      hasFocus: newState,
    })
  }

  render() {
    return (
      <Checkbox
        {...this.props}
        focus={this.state.hasFocus}
        onFocus={this.handleFocusChange(true)}
        onBlur={this.handleFocusChange(false)}
      />
    )
  }
}

export default CheckBoxContainer
