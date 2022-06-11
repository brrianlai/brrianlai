import React from 'react'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		date: 'Aug 2019 – Mar 2020',
		subheading: 'Social Recreation Volunteer, Dementia Care Unit',
		description: 'null'
	},
	{
		name: 'UBC Faculty of Education',
		date: 'May – Aug 2019',
		subheading: 'Cultural Ambassador, Vancouver Summer Program',
		description: 'null'
	},
	{
		name: 'Thunderbird Elementary',
		date: 'Sep 2017 – Jun 2018',
		subheading: 'Mentor, Community Schools Team',
		description: 'null'
	}
]

const VolunteerExperience = () => {
	return (
		<section data-offset='left'>
			<h4>Volunteer Experience</h4>
			{volunteerList.map((volunteer, index) => (
					<div className='column' data-gap='smaller' data-layout='justified'>
						<h5>{volunteer.name}</h5>
						<div className='row' data-gap='smaller' data-layout='justified'>
							<h6>{volunteer.subheading}</h6>
							<h6>{volunteer.date}</h6>
						</div>
					</div>
				))}
		</section>
	)
}

export default VolunteerExperience