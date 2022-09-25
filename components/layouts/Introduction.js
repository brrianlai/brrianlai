import React from 'react'
import Image from 'next/future/image'
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
				<h4>A recent Biology graduate from UBC with an interest in design and front-end web development</h4>
				<div className='row'>
					<Button link='/resume-20220611.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
					<Button link='mailto:laibrian@alumni.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
				</div>
			</div>
			<div className='column'>
				<div className='profile'>
					<Image src={profile} width="1125" height="1125" sizes="(max-width: 768px) 16rem, 24rem" priority />
				</div>
			</div>
		</section>
	)
}

export default Introduction
