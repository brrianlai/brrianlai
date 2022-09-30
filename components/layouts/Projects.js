import React from 'react'
import Button from '../Button'

const projects = [
	{
		name: 'brrianlai.github.io/site',
		description: 'Description',
		tags: ['HTML', 'CSS', 'React'],
		buttonText: 'Button text',
		link: '#',
		preview: 'https://via.placeholder.com/160'
	}
]

const Projects = () => {
	return (
		<section data-layout='center'>
			<h2>Projects</h2>

			<div class='grid' data-columns='3'>
				<h1>A</h1>
				<h1>A</h1>
				<h1>A</h1>
			</div>
		</section>
	)
}

export default Projects
