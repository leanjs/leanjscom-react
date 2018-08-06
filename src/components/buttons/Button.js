import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
const grey = '#4a4a4a'

const darkStyles = `
	background-color:${grey};
	color:white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`

const lightStyles = `
  	background-color:white;
  	color:${grey};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`

const Button = styled.button`
  ${FONT_FAMILY} ${props =>
    props.dark ? darkStyles : lightStyles} border-radius: 2px;
  border: solid 1px transparent;
  margin: 1em 0;
  padding: 0.5em 1em;
  width: ${props => props.fullWidth && `100%;`}
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
