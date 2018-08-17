import styled from 'styled-components'
import { FONT_FAMILY, DARKGREY, WHITE } from '../../config/styles'

const getBackgroundColor = props => (props.dark ? DARKGREY : WHITE)
const getBoxshadowOpacity = props => (props.dark ? `0.24` : `0.45`)
export const getForegroundColor = props => (props.dark ? WHITE : DARKGREY)

const setColours = props => `
  	background-color:${getBackgroundColor(props)};
  	color:${getForegroundColor(props)};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, ${getBoxshadowOpacity(
      props
    )}), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`
const allowArrows = props =>
  props.hasArrows ? `&:after { content: " >>"}` : ``
const allowFullWidth = props => `width: ${props.fullWidth ? `100%` : `auto`};`

export const DEFAULT_BUTTON_STYLES = props => `
	${FONT_FAMILY}
	border-radius: 2px;
	border: solid 1px transparent;
	margin: 1em 0;
	padding: 0.5em 1em;
	cursor:pointer;
	${setColours(props)};
	${allowFullWidth(props)};
	${allowArrows(props)};
`

const Button = styled.button`
  ${DEFAULT_BUTTON_STYLES};
  &:active {
    transform: translate(1px, 1px);
  }
`

export default Button
