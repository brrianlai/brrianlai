import Image from 'next/image'
import { motion } from 'framer-motion'

const background = '/background.jpg'

const Background = () => {
	return (
		<motion.div
			animate='show'
			className='background'
			initial='hidden'
			variants={container}>
			<Image src={background} fill sizes='100vw' quality='90' priority alt='' />
		</motion.div>
	);
}

const container = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: [0.465, 0.183, 0.153, 0.946]
		}
	}
}

export default Background