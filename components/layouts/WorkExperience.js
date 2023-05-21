import { motion } from 'framer-motion'

const workList = [
	{
		name: 'Canada Border Services Agency (CBSA)',
		tags: ['Oct 2022 to present', 'Administrative Assistant'],
		description: 'Process accounts payables such as journal vouchers and invoices with purchase orders/funds reservations. Prepare staffing paperwork for HR. Provide onboarding and training for new employees.'
	},
	{
		tags: ['May 2023 to present', 'a/Executive Assistant'],
		description: 'Act as the Executive Assistant to the Director.'
	},
	{
		tags: ['April 2023 to May 2023', 'a/ATIP Officer'],
		description: 'Act as the ATIP Liaison Officer for the Pacific Region to coordinate the retrieval, review, and submission of information to the requestor.'
	},
	{
		name: 'A1 Learning Centre',
		tags: ['May 2022 to present', 'Tutor'],
		description: 'Work closely with 20+ elementary students in Math and English. Use a variety of teaching methods and materials to create engaging and effective learning experience. Hold small group learning activities for 3-4 students at once.'
	},
	{
		name: 'Adventure Zone',
		tags: ['Aug 2015 to Jan 2019', 'Receptionist'],
		description: 'Managed admissions, cash deposits, bookings, new employee training, and store opening/closing as a keyholder. Provided customer service and trained new employees. Maintained and repaired computers and arcade machines.'
	}
]

const WorkExperience = () => {
	return (
		<section>

			<h4>Work Experience</h4>

			<div className='grid' data-columns='3'>

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
						<h5>{work.name}</h5>
						<div className='row' data-gap='small'>
							{work.tags.map((tag, index) => (
								<h6 key={index}>{tag}</h6>
							))}
						</div>
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