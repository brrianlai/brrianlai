import React from 'react';

const Backgrounds = [
	'dark',
	'light',
	'black',
	'white',
	'clay',
	'yellow',
	'mint',
	'purple'
]

const Shapes = [
	'square',
	'rounded',
	'round'
]

const Sizes = [
	'small',
	'large'
]

const Button = ({
	children,
	link,
	background,
	shape,
	size
}) => {
	const checkBackground = Backgrounds.includes(background) ? background : Backgrounds[0];
	const checkShape = Shapes.includes(shape) ? shape : Shapes[0];
	const checkSize = Sizes.includes(size) ? size : Sizes[0];

	return (
		<a href={link} className="button" data-background={checkBackground} data-shape={checkShape} data-size={checkSize}>{children}</a>
	);
};

export default Button