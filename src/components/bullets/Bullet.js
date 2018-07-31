import React from 'react'
import styled from 'styled-components'

import Circle from '../elements/Circle'

const getSrc = (image, images) => {
  if (images[image]) {
    return images[image]
  }

  throw new Error('Unknown image')
}

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
      backgroundImage={getSrc(image, images)}
    />
  </BulletInner>
)

export default Bullet
