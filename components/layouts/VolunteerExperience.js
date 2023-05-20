import { motion } from 'framer-motion'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		date: 'Aug 2019 to Mar 2020',
		subheading: 'Social Recreation Volunteer',
		description: 'Engaged in social activities with residents to improve cognitive abilities. Developed interpersonal and communicational skills through connections with residents.'
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

			<div className='grid' data-columns='4'>

				{volunteerList.map((volunteer, index) => (
					<motion.div
						className='column'
						data-gap='smaller'
						initial='hidden'
						key={index}
						variants={item}
						viewport={{ once: true }}
						whileInView='show'
					>
						<div className='row' data-gap='small'>
							<h6>{volunteer.date}</h6>
							<h6>{volunteer.subheading}</h6>
						</div>
						<h5>{volunteer.name}</h5>
						<p>{volunteer.description}</p>
					</motion.div>
				))}

			</div>

		</section>
	)
}

const item = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.465, 0.183, 0.153, 0.946]
		},
		y: 0
	}
}

export default VolunteerExperience