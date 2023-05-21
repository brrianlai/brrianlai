import Button from '../Button'

const Contact = () => {
	return (
		<section className='background-dotted' data-align='center' data-size='large'>
			<h2>Contact</h2>
			<Button link='mailto:laibrian@student.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='dark'>laibrian@student.ubc.ca</Button>
		</section>
	)
}

export default Contact