import React from 'react'

const skillList = [
	'HTML',
	'CSS',
	'Figma (UI design)',
	'Microsoft Office',
	'Statistics',
]

const Skills = () => {
	return (
		<section>
			<h4>Skills</h4>
			<div className='row'>
				{skillList.map((name, index) => (
					<p key={index}>{name}</p>
				))}
			</div>
		</section>
	)
}

export default Skills
