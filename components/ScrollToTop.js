import React, { useEffect } from 'react'
import Icon from './Icon'
import smoothscroll from 'smoothscroll-polyfill'

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const ScrollToTop = () => {
	useEffect(() =>
		smoothscroll.polyfill()
	)
	
	return (
		<a className='scrolltotop' onClick={toTop} alt='Scroll to top'>
			<Icon name='ri-arrow-up-line' onClick={toTop} />
		</a>
	)
}

export default ScrollToTop
