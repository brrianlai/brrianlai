import { motion } from 'framer-motion'

const Gallery = ({ children }) => {
	return (
		<>
			{children.map((child, index) => (
				<motion.div
					className='gallery-photo'
					key={index}
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					{child}
				</motion.div>
			))}
		</>
	)
}

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

export default Gallery
