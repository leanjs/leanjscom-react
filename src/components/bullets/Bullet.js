import React from 'react'
import styled from 'styled-components'
import Circle from '../elements/Circle'
import { requireFrom } from '../utils'

const BulletInner = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Bullet = ({
  image,
  images,
  color,
  bg,
  size,
  noPadding = false,
  borderSize = 4,
  hasBorder = true,
}) => (
  <BulletInner>
    <Circle
      color={color}
      bg={bg}
      size={size}
      hasBorder={hasBorder}
      borderSize={borderSize}
      backgroundImage={requireFrom(image, images)}
    />
  </BulletInner>
)

export default Bullet
