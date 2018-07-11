import React from 'react'

import {
  Circle,
  BackgroundImage
} from 'rebass'

import NoRepeatBackgroundImage from '../elements/NoRepeatBackgroundImage'
import CircleWithBorder from '../elements/CircleWithBorder'


const getSrc = (image, images) => {
	if (images[image]) {
		return images[image]
	}

	throw new Error("Unknown image")
}

const Bullet = ({ image, images, color, bg, size, hasBorder=false }) => {
	const Component = (hasBorder?CircleWithBorder:Circle)

	return (
		<Component color={color} bg={bg} size={size}>
			<NoRepeatBackgroundImage ratio={1} src={getSrc(image, images)} backgroundSize="contain" />
		</Component>
	)
}

export default Bullet
