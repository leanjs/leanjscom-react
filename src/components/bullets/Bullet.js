import React from 'react'

import Circle from '../elements/Circle'

const getSrc = (image, images) => {
  if (images[image]) {
    return images[image]
  }

  throw new Error('Unknown image')
}

const Bullet = ({
  image,
  images,
  color,
  bg,
  size,
  borderSize = 4,
  hasBorder = false,
}) => (
  <Circle
    color={color}
    bg={bg}
    size={size}
    hasBorder={hasBorder}
    borderSize={borderSize}
    backgroundImage={getSrc(image, images)}
  />
)

export default Bullet
