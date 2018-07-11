import React from 'react'

import NoRepeatBackgroundImage from '../elements/NoRepeatBackgroundImage'
import Circle from '../elements/Circle'

const getSrc = (image, images) => {
	if (images[image]) {
		return images[image]
	}

	throw new Error("Unknown image")
}

const Bullet = ({ image, images, color, bg, size, hasBorder=false }) => (
	<Circle color={color} bg={bg} size={size} hasBorder={hasBorder}>
		<NoRepeatBackgroundImage ratio={0.9} src={getSrc(image, images)} backgroundSize="contain" />
	</Circle>
)

export default Bullet
