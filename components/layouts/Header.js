import { useState } from 'react'
import { motion } from 'framer-motion'

import Social from '../Social'
import Icon from '../Icon'

import useScrollDirection from '../../src/useScrollDirection'

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
			delayChildren: 0.3,
			duration: 0.6,
			ease: [0.465, 0.183, 0.153, 0.946],
			staggerChildren: 0.08
		},
		y: 0
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.4,
			ease: [0.465, 0.183, 0.153, 0.946]
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
				initial='hidden'
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
