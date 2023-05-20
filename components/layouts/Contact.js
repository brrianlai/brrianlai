import Button from '../Button'
import { motion } from 'framer-motion'

const Contact = () => {
	return (
		<section className='background-dotted' data-align='center' data-size='large'>
			<h2>Let's connect</h2>
			<motion.div
				className='row'
				data-align='center'
				data-gap='small'
				initial='hidden'
				variants={container}
				viewport={{ once: 'true' }}
				whileInView='show'
			>
				<motion.div variants={item}>
					<Button link='/brian-lai-resume-221024.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
				</motion.div>
				<motion.div variants={item}>
					<Button link='mailto:laibrian@alum.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
				</motion.div>
			</motion.div>
		</section>
	)
}

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: [0.465, 0.183, 0.153, 0.946]
		},
		y: 0
	}
}

export default Contact