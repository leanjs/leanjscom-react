import React from 'react'

import NoRepeatBackgroundImage from '../elements/NoRepeatBackgroundImage'
import Circle from '../elements/Circle'

const getImage = (image, images) => {
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
}) => {
  const foundImage = getImage(image, images)
  const isSVG = typeof foundImage !== 'string'
  const ImageComponent = isSVG ? foundImage : null

  return (
    <Circle
      color={color}
      bg={bg}
      size={size}
      hasBorder={hasBorder}
      borderSize={borderSize}
    >
      {isSVG ? (
        <ImageComponent />
      ) : (
        <NoRepeatBackgroundImage
          ratio={0.9}
          src={foundImage}
          backgroundSize="contain"
        />
      )}
    </Circle>
  )
}

export default Bullet
