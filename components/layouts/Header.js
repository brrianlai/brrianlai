import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Social from '../Social'
import Icon from '../Icon'

import useScrollDirection from '../../utils/useScrollDirection'
import useTimeout from '../../utils/useTimeout'

const variants = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		},
		y: 0
	},
	closed: {
		opacity: 0,
		transition: {
			duration: 0.25,
			ease: 'easeIn'
		},
		y: '100%'
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
				<div className='menu-icon' onClick={toggleActive}>
					<Icon name='ri-menu-line' />
				</div>
			</header>
			<motion.nav
				animate={isActive ? 'open' : 'closed'}
				drag='y'
				dragConstraints={{ top: 0, bottom: 0 }}
				dragElastic = {{ top: 0, bottom: 0.3 }}
				initial={false}
				onDragEnd={handleDragEnd}
				variants={variants}
			>
				<div className='row nav-heading'>
					<div className='menu-icon' onClick={toggleActive}>
						<Icon name='ri-close-line' />
					</div>
				</div>
				<div className='column nav-body'>
					<a href='#'><h4>Hello</h4></a>
					<a href='#'><h4>From</h4></a>
					<a href='#'><h4>The</h4></a>
					<a href='#'><h4>Other</h4></a>
					<a href='#'><h4>Side</h4></a>
				</div>
				<div className='row nav-footer'>
					<Social />
				</div>
			</motion.nav>
		</>
	)
}

export default Header
