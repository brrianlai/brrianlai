const courseList = [
	{
		code: 'CHEM 233',
		name: 'Organic Chemistry'
	},
	{
		code: 'CPSC 103',
		name: 'Systematic Program Design'
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
		name: 'Molecular Biology Laboratory'
	},
	{
		code: 'BIOL 363',
		name: 'Animal Physiology Laboratory'
	},
	{
		code: 'PCTH 325',
		name: 'Rational Basis of Drug Therapy'
	},
	{
		code: 'CLST 301',
		name: 'Technical Terms of Medicine and Biological Science'
	}
]

const Courses = () => {
	return (
		<section>
			<h4>Courses Taken</h4>
			<div className='row'>
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
