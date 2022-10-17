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
					<h4>Brian Lai</h4>
				</div>
			</header>
		</div>
	)
}

export default Header
