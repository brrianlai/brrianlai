import React from 'react'

const skillList = [
	'HTML',
	'CSS',
	'React',
	'Figma (UI design)',
	'Microsoft Office',
	'Statistics']

const Skills = () => {
	return (
		<section data-offset='left'>
			<h4>Skills</h4>
			<div className='array'>
				{skillList.map((name, index) => (
					<p key={index}>{name}</p>
				))}
			</div>
		</section>
	)
}

export default Skills
