import React from 'react'

const backgrounds = [
	'dark',
	'light',
	'black',
	'white',
	'clay',
	'yellow',
	'mint',
	'purple'
]

const shapes = ['square', 'rounded', 'round']

const sizes = ['small', 'large']

const Button = ({ children, link, background, shape, size }) => {
	const checkBackground = backgrounds.includes(background)
		? background
		: backgrounds[0]
	const checkShape = shapes.includes(shape) ? shape : shapes[0]
	const checkSize = sizes.includes(size) ? size : sizes[0]

	return (
		<a
			href={link}
			className='button'
			data-background={checkBackground}
			data-shape={checkShape}
			data-size={checkSize}
		>
			{children}
		</a>
	)
}

export default Button
