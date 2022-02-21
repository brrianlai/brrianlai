import React from 'react';

const skillList = [
	'HTML', 'CSS', 'React', 'Node.js', 'R', 'Python', 'Figma'
]

const Skills = () => {
	return (
		<section data-offset="left">
			<h4 className="heading">Skills</h4>
			<div className="array">
				{skillList.map(name => (
					<p>{name}</p>
				))}
			</div>
		</section>
	);
}

export default Skills