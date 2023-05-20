import Tag from '../Tag'
import { motion } from 'framer-motion'

const workList = [
	{
		name: 'Canada Border Services Agency (CBSA)',
		date: 'Oct 2022 to present',
		subheading: 'Administrative Assistant',
		description: ''
	},
	{
		name: 'A1 Learning Centre',
		date: 'May 2022 to present',
		subheading: 'Tutor',
		description: 'Work closely with 20+ elementary students in Math and English. Hold small group learning activities for 3-4 students at once.'
	},
	{
		name: 'Adventure Zone',
		date: 'Aug 2015 to Jan 2019',
		subheading: 'Receptionist',
		description: 'Managed admissions, cash deposits, bookings, new employee training, and store opening/closing as a keyholder. Maintained and repaired computers and arcade machines.'
	}
]

const WorkExperience = () => {
	return (
		<section>

			<h4>Work Experience</h4>

			<div className='grid' data-columns='4'>

				{workList.map((work, index) => (
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
							<h6>{work.date}</h6>
							<h6>{work.subheading}</h6>
						</div>
						<h5>{work.name}</h5>
						<p>{work.description}</p>
					</motion.div>
				))}

			</div>

		</section>
	)
}

const item = {
	hidden: {
		opacity: 0,
		y: 10
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

export default WorkExperience