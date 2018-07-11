
import styled from 'styled-components'

const grey = '#4a4a4a'

const darkStyles = `
	background-color:${grey};
	color:white;
`

const lightStyles = `
  	background-color:white;
  	color:${grey};
`

const Button = styled.button`
  ${props => props.dark?darkStyles:lightStyles}
  border-radius: 2px;
  border: solid 1px transparent;
  padding:0.5em 1em;
  ${props => props.hasArrows?`
	  &:after {
	  	content: " >>"
	  }
  `:``}
`

export default Button
