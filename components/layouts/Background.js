import React from 'react';
import Image from 'next/image';

const background = '/background.jpg'

const Background = () => {
	return (
		<div className='background'>
			<Image src={background} layout='fill' priority='true' />
		</div>
	);
}

export default Background