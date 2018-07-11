import { Circle, BackgroundImage } from 'rebass'

import styled from 'styled-components'
import theme from '../../layouts/rebass-theme'

const CustomCircle = styled(Circle)`
  display: flex;
  align-items: center;
  ${props =>
    props.hasBorder
      ? `border: ${props.borderSize}px solid ${theme.colors[props.color] ||
          props.color}`
      : ``};
`

export default CustomCircle
