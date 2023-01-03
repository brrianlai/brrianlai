import { useState } from 'react'
import { motion } from 'framer-motion'

import Social from '../Social'
import Icon from '../Icon'

import useScrollDirection from '../../utils/useScrollDirection'

const navItems = [
	{
		name: 'Hello',
		link: '#'
	},
	{
		name: 'From',
		link: '#'
	},
	{
		name: 'The',
		link: '#'
	},
	{
		name: 'Other',
		link: '#'
	},
	{
		name: 'Side',
		link: '#'
	}
]

const variants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
			staggerChildren: 0.05,
			when: 'beforeChildren'
		},
		y: 0
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.25,
			ease: 'easeIn',
		},
		y: '120%'
	}
}

const item = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 20
	}
}

const Header = () => {
	const [isActive, setActive] = useState(false)
	const toggleActive = () => setActive(!isActive)

	async function handleDragEnd(event, info) {
		const offset = info.offset.y
		const velocity = info.velocity.y

		if (offset > 120 || velocity > 500) {
			toggleActive()
		}
	}

	const scrollDirection = useScrollDirection()

	return (
		<>
			<header className={scrollDirection === 'down' ? 'hidden' : null}>
				<h4>Brian Lai</h4>
				<div className='icon-menu' onClick={toggleActive}>
					<Icon name='ri-menu-line' />
				</div>
			</header>
			<motion.nav
				animate={isActive ? 'visible' : 'hidden'}
				drag='y'
				dragConstraints={{ top: 0, bottom: 0 }}
				dragElastic = {{ top: 0, bottom: 0.3 }}
				initial='hidden'
				onDragEnd={handleDragEnd}
				variants={variants}
			>
				<div className='row nav-heading'>
					<div className='icon-menu' onClick={toggleActive}>
						<Icon name='ri-close-line' />
					</div>
				</div>
				<motion.div className='column nav-body'>
					{navItems.map((navItem, index) => (
						<motion.a
							href={navItem.link}
							key={index}
							variants={item}
						>
							<h4>{navItem.name}</h4>
						</motion.a>
					))}
				</motion.div>
				<motion.div
					className='row nav-footer'
					variants={item}
				>
					<Social />
				</motion.div>
			</motion.nav>
		</>
	)
}

export default Header
