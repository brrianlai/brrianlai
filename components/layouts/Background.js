import Image from 'next/image';

const background = '/background.jpg'

const Background = () => {
	return (
		<div className='background'>
			<Image src={background} fill sizes='100vw' quality='90' priority alt='' />
		</div>
	);
}

export default Background