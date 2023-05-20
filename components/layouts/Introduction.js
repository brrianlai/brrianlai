import Image from 'next/image'
import Button from '../Button'
import { motion } from 'framer-motion'
import Social from '../Social'

const profile = '/profile.jpg'

const Introduction = () => {
	return (
		<section className='introduction background-waves' data-align='center'>
			<motion.div
				className='column'
				initial='hidden'
				animate='show'
				variants={container}
			>
				<h3>Hi! I'm a Biology undergraduate student from UBC with an interest in web and app design</h3>
				<motion.div className='row' variants={item} data-gap='small'>
					<Button link='/brian-lai-resume-221024.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
					<Button link='mailto:laibrian@alum.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
				</motion.div>
				<motion.div variants={item}>
					<Social />
				</motion.div>
			</motion.div>
			<div className='column'>
				<div className='profile'>
					<Image src={profile} width='1125' height='1125' sizes='(max-width: 960px) 180px, 280px' priority alt='Profile photo'/>
				</div>
			</div>
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

export default Introduction
