import React from 'react'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		date: 'Aug 2019 – Mar 2020',
		subheading: 'Social Recreation Volunteer',
		description: 'Engaged in social activities and interactions with residents to reinforce their cognitive abilities. Developed interpersonal and communicational skills through connections with residents.'
	},
	{
		name: 'UBC Faculty of Education',
		date: 'May 2019 – Aug 2019',
		subheading: 'Cultural Ambassador',
		description: 'Led social and recreational activities for 250+ international undergraduate students. Assisted in organizing plans for upcoming activities with program coordinators. Immersed students with sociocultural experiences in Canadian culture.'
	},
	{
		name: 'Thunderbird Elementary',
		date: 'Sep 2017 – Jun 2018',
		subheading: 'Tutor',
		description: 'Guided elementary students in academic and physical activities after school, including Math and English.'
	}
]

const VolunteerExperience = () => {
	return (
		<section data-background='grey'>

			<div className='grid' data-columns='1-2'>

				<div className='column'>
					<h4>Volunteer Experience</h4>
				</div>

				<div className='column'>
					{volunteerList.map((volunteer, index) => (
						<div className='column' data-gap='smaller' key={index}>
							<h5>{volunteer.name}</h5>
							<div className='row' data-layout='justified'>
								<p>{volunteer.subheading}</p>
								<p>{volunteer.date}</p>
							</div>
							<p>{volunteer.description}</p>
						</div>
					))}
				</div>

			</div>

		</section>
	)
}

export default VolunteerExperience