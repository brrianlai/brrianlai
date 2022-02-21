import React from 'react'
import Button from '../components/Button'

const Introduction = () => {
	return (
		<section className='introduction'>
			<div className='column'>
				<h1 className='heading'>hi i live in vancouver</h1>
				<Button link='#' background='clay' size='large'>
					i'm learning react
				</Button>
			</div>
			<div className='column'>
				<div className='profile'></div>
			</div>
		</section>
	)
}

export default Introduction
