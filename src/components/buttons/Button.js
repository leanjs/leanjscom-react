import styled from 'styled-components'
import { FONT_FAMILY, DARKGREY } from '../../config/styles'

export const darkStyles = `
	background-color:${DARKGREY};
	color:white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`

export const lightStyles = `
  	background-color:white;
  	color:${DARKGREY};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`
export const DEFAULT_BUTTON_STYLES = `
	${FONT_FAMILY}
	border-radius: 2px;
	border: solid 1px transparent;
	margin: 1em 0;
	padding: 0.5em 1em;
`

const Button = styled.button`
  ${DEFAULT_BUTTON_STYLES} ${props => (props.dark ? darkStyles : lightStyles)};
  width: ${props => props.fullWidth && `100%;`};
  ${props =>
    props.hasArrows
      ? `
		&:after {
			content: " >>"
		}
	`
      : ``};
`

export default Button
