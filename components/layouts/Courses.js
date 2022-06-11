import React from 'react'

const courseList = [
	{
		code: 'CHEM 233',
		name: 'Organic Chemistry'
	},
	{
		code: 'CPSC 103',
		name: 'Introduction to Systematic Program Design'
	},
	{
		code: 'STAT 200',
		name: 'Elementary Statistics'
	},
	{
		code: 'BIOL 331',
		name: 'Developmental Biology'
	},
	{
		code: 'BIOL 341',
		name: 'Introductory Molecular Biology Laboratory'
	},
	{
		code: 'BIOL 363',
		name: 'Laboratory in Animal Physiology'
	}
]

const Courses = () => {
	return (
		<section>
			<h4>Courses Taken</h4>
			<div className='array'>
				{courseList.map((course, index) => (
					<div className='row' data-gap='smaller' key={index}>
						<h5>{course.code}</h5>
						<p>{course.name}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Courses
