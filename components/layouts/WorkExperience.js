import React from 'react'

const workList = [
	{
		name: 'A1 Learning Centre',
		date: 'May 2022 – present',
		subheading: 'Elementary Tutoring',
		description: 'null'
	},
	{
		name: 'Adventure Zone',
		date: 'Aug 2015 – Jan 2019',
		subheading: 'Receptionist',
		description: 'null'
	}
]

const WorkExperience = () => {
	return (
		<section data-offset='right'>
			<h4>Work Experience</h4>
				{workList.map((work, index) => (
					<div className='column' data-gap='smaller' data-layout='justified'>
						<h5>{work.name}</h5>
						<div className='row' data-gap='smaller' data-layout='justified'>
							<h6>{work.subheading}</h6>
							<h6>{work.date}</h6>
						</div>
					</div>
				))}
		</section>
	)
}

export default WorkExperience