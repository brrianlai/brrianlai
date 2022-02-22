import React from 'react'
import Icon from './Icon'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const ScrollToTop = () => {
	return (
		<Icon icon='ri-arrow-up-line' onClick={toTop} />
	)
}

export default ScrollToTop
