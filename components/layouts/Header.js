import React from 'react'
import Social from '../Social'
import Icon from '../Icon'

const Header = () => {
	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<div>
			<header>
				<h4>brrian</h4>
				<Social />
				<div className='icon icon-menu' onClick={toggleActive} aria-label='Menu button'>
					<Icon name='ri-menu-line' />
				</div>
			</header>

			<nav className={active ? 'active' : ''}>
				<Social />
			</nav>
		</div>
	)
}

export default Header
