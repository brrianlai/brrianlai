import React from 'react'
import Button from '../Button'
import Image from 'next/future/image'
import Card from '../Card'

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
		tags: ['React', 'Next.js', 'Responsive', 'Dark mode', 'Markdown'],
		preview: '/site.png',
		height: '1800',
		width: '2400'
	}
]

const Projects = () => {
	return (
		<section>
			<h4>Projects</h4>
			<div className='grid' data-columns='3'>
				{projects.map((project, index) => (
					<Card title={project.name} key={index} tags={project.tags} image={project.preview} height={project.height} width={project.width} sizes='(max-width: 768px) 100vw, 33vw' />
				))}
			</div>
		</section>
	)
}

export default Projects
