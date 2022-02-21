import React from 'react';

const skill = [
	'HTML', 'CSS', 'React', 'Node.js', 'R', 'Python', 'Figma'
]

class Skills extends React.Component {
	render() {
		return (
			<section data-offset="left">
				<h4 className="heading">Skills</h4>
				<div className="array">
					{skill.map(name => (
						<p>{name}</p>
					))}
				</div>
			</section>
		);
	}
}

export default Skills