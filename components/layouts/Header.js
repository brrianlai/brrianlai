import React from 'react'
import Social from '../Social'
import Icon from '../Icon'

const Header = () => {
	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<div>
			<header>
				<h3>brrian</h3>
				<Social />
				<a href='#' className='icon icon-menu' onClick={toggleActive}>
					<Icon name='ri-menu-line' />
				</a>
			</header>

			<nav className={active ? 'active' : ''}>
				<a href='#' className='icon' onClick={toggleActive}>
					<Icon name='ri-close-line' />
				</a>
				<Social />
			</nav>
		</div>
	)
}

export default Header
