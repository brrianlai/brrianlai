import React from 'react'
import Social from '../Social'

const Header = () => {
	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<header>
			<h4>Brian Lai</h4>
		</header>
	)
}

export default Header
