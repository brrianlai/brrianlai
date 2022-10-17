import React from 'react'
import Card from '../Card'
import { motion } from 'framer-motion'

const projects = [
	{
		name: 'Apollo app redesign',
		tags: ['Figma', 'iOS'],
		preview: '/apollo.png',
		height: '1800',
		width: '2400'
	},
	{
		name: 'Instagram app redesign',
		tags: ['Figma', 'iOS'],
		preview: '/instagram.png',
		height: '1800',
		width: '2400'
	},
	{
		name: 'VSCO app redesign',
		tags: ['Figma', 'iOS'],
		preview: '/vsco.png',
		height: '1800',
		width: '2400'
	},
	{
		name: 'Personal website',
		tags: ['React', 'Next.js', 'Vercel', 'Responsive', 'Dark mode'],
		preview: '/site.png',
		height: '1800',
		width: '2400',
		link: 'https://github.com/brrianlai/brrian.vercel.app'
	},
	{
		name: 'Discord app redesign',
		tags: ['Figma', 'Coming soon'],
		preview: '/placeholder.png',
		height: '900',
		width: '1200'
	},
]

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
			delay: 0.5,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

const Projects = ({ posts }) => {
	return (
		<section>
			<h4>Projects</h4>
			
			<div className='grid' data-columns='3'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						variants={item}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{(project.link) ?
							<Card
								title={project.name}
								tags={project.tags}
								image={project.preview}
								height={project.height}
								width={project.width}
								sizes='(max-width: 768px) 100vw, 33vw'
								link={project.link}
							/>
						: 
							<Card
								title={project.name}
								tags={project.tags}
								image={project.preview}
								height={project.height}
								width={project.width}
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						}
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default Projects
