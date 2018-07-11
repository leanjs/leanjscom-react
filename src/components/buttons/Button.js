
import styled from 'styled-components'

const Button = styled.button`
  background-color:white;
  color:#4a4a4a;
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
