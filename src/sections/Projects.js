import React from 'react';
import Button from '../components/Button'

const projects = [
	{
		name: 'Name',
		description: 'Description',
		buttonText: 'Button text',
		link: '#',
		preview: 'https://via.placeholder.com/150'
	},
	{
		name: 'Name 2',
		description: 'Description 2',
		preview: 'https://via.placeholder.com/300'
	}
]

const Projects = () => {
	return (
		<section>
			<h4 className="heading">Projects</h4>
			{projects.map(project => (
				<div className="grid" data-columns="2-1">
					<div className="project">
						<h5 className="heading">{project.name}</h5>
						<p>{project.description}</p>
						{(project.link && project.buttonText) ? <Button link={project.link}>{project.buttonText}</Button> : null}
					</div>
					{(project.preview) ? 
						<div>
							<img src={project.preview} />
						</div>
					: null}
				</div>
			))}
		</section>
	);
}

export default Projects