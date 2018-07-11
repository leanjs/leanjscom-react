
import {
	Circle,
  	BackgroundImage
} from 'rebass'

import styled from 'styled-components'

const CircleWithBorder = styled(Circle)`
	border: ${props => (props.size / 13)}px solid ${props => props.color}
`

export default CircleWithBorder
