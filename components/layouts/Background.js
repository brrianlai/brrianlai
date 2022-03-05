import React from 'react';
import Image from 'next/image';

const Background = () => {
	return (
		<div className='background'>
			<Image src='/background.jpg' layout='fill' priority='true' />
		</div>
	);
}

export default Background