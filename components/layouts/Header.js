import React from 'react'
import Social from '../Social'
import Icon from '../Icon'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()

	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<div>
			<header>
				<div className='row' data-align='center' data-gap='small'>
					{router.pathname !== '/' && (
						<a className='icon-back' onClick={() => router.back()}>
							<Icon name='ri-arrow-left-line' />
						</a>
					)}
					<h4>brrian</h4>
				</div>
				<Social />
				<div className='icon icon-menu' onClick={toggleActive}>
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
