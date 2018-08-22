import React from 'react'
import styled from 'styled-components'
import Circle from '../elements/Circle'
import { requireFrom } from '../utils'

// For storybook
export const addStories = (Component, validImages, init) => {
  Object.keys(validImages).reduce(
    (agg, cur) => agg.add(cur, () => <Component image={cur} />),
    init
  )
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
  hasPadding = true,
  borderSize = 4 / 18,
  hasBorder = true,
  backgroundSize = null,
}) => (
  <BulletInner>
    <Circle
      color={color}
      bg={bg}
      size={size}
      hasBorder={hasBorder}
      hasPadding={hasPadding}
      borderSize={borderSize}
      backgroundImage={requireFrom(image, images)}
      backgroundSize={backgroundSize}
    />
  </BulletInner>
)

export default Bullet
