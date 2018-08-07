import styled from 'styled-components'
import { FONT_FAMILY, DARKGREY, WHITE } from '../../config/styles'

export const darkStyles = `
	background-color:${DARKGREY};
	color:${WHITE};
  	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`

export const lightStyles = `
  	background-color:${WHITE};
  	color:${DARKGREY};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`

const allowArrows = props =>
  props.hasArrows ? `&:after { content: " >>"}` : ``
const allowFullWidth = props => `width: ${props.fullWidth ? `100%` : `auto`};`
const allowDarkOrLight = props => (props.dark ? darkStyles : lightStyles)

export const DEFAULT_BUTTON_STYLES = props => `
	${FONT_FAMILY}
	border-radius: 2px;
	border: solid 1px transparent;
	margin: 1em 0;
	padding: 0.5em 1em;
	${allowDarkOrLight(props)};
	${allowFullWidth(props)};
	${allowArrows(props)};
`

const Button = styled.button`
  ${DEFAULT_BUTTON_STYLES};
`

export default Button
