import React from 'react';
import Image from 'next/future/image';

const background = '/background.jpg'

const Background = () => {
	return (
		<div className='background'>
			<Image src={background} fill sizes="100vw" quality="90" priority />
		</div>
	);
}

export default Background