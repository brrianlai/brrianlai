import React from 'react'
import Card from '../Card'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'

const container = {
	hidden: {
	},
	show: {
		transition: {
			staggerChildren: 0.4
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		y: 15
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

const projects = [
	{
		name: 'Apollo app redesign',
		tags: ['Figma', 'iOS'],
		preview: '/apollo.png',
		height: '1800',
		width: '2400'
	},
	{
		name: 'Discord app redesign',
		tags: ['Figma'],
		preview: '/placeholder.png',
		height: '900',
		width: '1200'
	},
	{
		name: 'Instagram app redesign',
		tags: ['Figma', 'iOS'],
		preview: '/instagram.png',
		height: '1800',
		width: '2400'
	},
	{
		name: 'Personal website',
		tags: ['React', 'Next.js', 'Responsive', 'Dark mode', 'HTML5', 'CSS3'],
		preview: '/site.png',
		height: '1800',
		width: '2400',
		link: 'https://github.com/brrianlai/brrian.vercel.app'
	}
]

const Projects = () => {
	return (
		<section>
			<h4>Projects</h4>
			<AnimatePresence mode={false}>
				<motion.div
					className='grid'
					data-columns='3'
					variants={container}
					initial='hidden'
					whileInView='show'
				>
					{projects.map((project, index) => (
						<motion.div variants={item}>
							<Card
								title={project.name}
								key={index}
								tags={project.tags}
								image={project.preview}
								height={project.height}
								width={project.width}
								sizes='(max-width: 768px) 100vw, 33vw'
								link={project.link}
							/>
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</section>
	)
}

export default Projects
