import React from 'react'
import { motion } from 'framer-motion'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		date: 'Aug 2019 to Mar 2020',
		subheading: 'Social Recreation Volunteer',
		description: 'Engaged in social activities and interactions with residents to reinforce their cognitive abilities. Developed interpersonal and communicational skills through connections with residents.'
	},
	{
		name: 'UBC Faculty of Education',
		date: 'May 2019 to Aug 2019',
		subheading: 'Cultural Ambassador',
		description: 'Led social and recreational activities for 250+ international undergraduate students. Assisted in organizing plans for upcoming activities with program coordinators.'
	},
	{
		name: 'Thunderbird Elementary',
		date: 'Sep 2017 to Jun 2018',
		subheading: 'Tutor',
		description: 'Guided elementary students in academic and physical activities after school, including Math and English.'
	}
]

const VolunteerExperience = () => {
	return (
		<section>

			<h4>Volunteer Experience</h4>

			{volunteerList.map((volunteer, index) => (
				<motion.div
					className='grid'
					data-columns='1-2'
					data-gap='responsive'
					key={index}
					variants={item}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<div className='column' data-gap='smaller'>
						<h5>{volunteer.name}</h5>
						<div className='row' data-gap='smaller'>
							<h6>{volunteer.subheading}</h6>
							<h6>{volunteer.date}</h6>
						</div>
					</div>
					<div className='column'>
						<p>{volunteer.description}</p>
					</div>
				</motion.div>
			))}

		</section>
	)
}

const item = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

export default VolunteerExperience