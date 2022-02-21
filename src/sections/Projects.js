import React from 'react';
import Button from '../components/Button'

const projects = [
	{
		name: 'brrianlai.github.io/site',
		description: 'Description',
		tags: ['HTML', 'CSS', 'React'],
		buttonText: 'Button text',
		link: '#',
		preview: 'https://via.placeholder.com/160'
	},
	{
		name: 'Name 2',
		description: 'Description 2',
		tags: ['HTML', 'CSS', 'React'],
		preview: 'https://via.placeholder.com/160'
	}
]

/* to do: clean up code */

const Projects = () => {
	
	return (
		<section>
			<h4 className="heading">Projects</h4>
			{projects.map(project => (
				<div className="grid" data-columns="1-2">
					
					{(project.preview) ? 
						<div>
							<img src={project.preview} />
						</div>
					: null}

					<div className="project">
						<h5 className="heading">{project.name}</h5>
						<p>{project.description}</p>
						<div class="array light-text">
						{
							(project.tags).map(tag => (
								<p>{tag}</p>
							))
						}
						</div>
						{(project.link && project.buttonText) ? <Button link={project.link}>{project.buttonText}</Button> : null}
					</div>
				</div>
			))}
		</section>
	);
}

export default Projects