import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const profile = '/profile.jpg'

const Introduction = () => {
	return (
		<section className='introduction'>
			<div className='column'>
				<div className='column' data-gap='smaller'>
					<h4>Nice to meet you! I'm</h4>
					<h1>Brian Lai</h1>
				</div>
				<div className='row'>
					<Button link='/resume-20220611.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
					<Button link='mailto:laibrian@alumni.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
				</div>
			</div>
			<div className='column'>
				<div className='profile'>
					<Image src={profile} layout='fill' priority='true'/>
				</div>
			</div>
		</section>
	)
}

export default Introduction
