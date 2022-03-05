import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const profile = '/profile.jpg'

const Introduction = () => {
	return (
		<section className='introduction'>
			<div className='column'>
				<h1 className='heading'>hi i live in vancouver</h1>
				<Button link='#' background='blue' size='large' shape='rounded'>
					i'm learning react and next.js
				</Button>
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
