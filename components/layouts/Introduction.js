import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const profile = '/profile.jpg'

const Introduction = () => {
	return (
		<section className='introduction'>
			<div className='column'>
				<h1>Brian Lai</h1>
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
