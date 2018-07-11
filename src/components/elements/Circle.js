
import {
	Circle,
  	BackgroundImage
} from 'rebass'

import styled from 'styled-components'

const CustomCircle = styled(Circle)`
	display:flex;
	align-items:center;
	${props => (props.hasBorder?`border: ${props.size / 13}px solid ${props.color}`:``)};
`

export default CustomCircle
