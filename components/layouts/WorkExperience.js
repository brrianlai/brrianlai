import React from 'react'

const workList = [
	{
		name: 'Canada Border Services Agency (CBSA)',
		date: 'Oct 2022 – present',
		subheading: 'Administrative assistant',
		description: ''
	},
	{
		name: 'A1 Learning Centre',
		date: 'May 2022 – present',
		subheading: 'Tutor',
		description: 'Work closely with 20+ elementary students in Math and English subjects.'
	},
	{
		name: 'Adventure Zone',
		date: 'Aug 2015 – Jan 2019',
		subheading: 'Receptionist',
		description: 'Managed admissions, cash deposits, bookings, new employee training, and store opening/closing as a keyholder. Maintained and repaired computers and arcade machines.'
	}
]

const WorkExperience = () => {
	return (
		<section>

			<div className='grid' data-columns='1-2'>

				<div className='column'>
					<h4>Work Experience</h4>
				</div>

				<div className='column'>
					{workList.map((work, index) => (
						<div className='column' data-gap='smaller' key={index}>
							<div className='row' data-layout='justified'>
								<div className='row'>
									<h5>{work.name}</h5>
									<p>{work.subheading}</p>
								</div>
								<p>{work.date}</p>
							</div>
							<p>{work.description}</p>
						</div>
					))}
				</div>

			</div>

		</section>
	)
}

export default WorkExperience