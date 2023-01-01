import { useState } from 'react'
import Icon from '../Icon'

const Header = () => {
	const [isActive, setActive] = useState(false)
	const toggleActive = () => setActive(!isActive)

	return (
		<>
			<header>
				<h4>Brian Lai</h4>
				<div className='menu-icon' onClick={toggleActive}>
					<Icon name='ri-menu-line' />
				</div>
			</header>
			<nav className={isActive ? 'active' : null}>
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
			</nav>
		</>
	)
}

export default Header
