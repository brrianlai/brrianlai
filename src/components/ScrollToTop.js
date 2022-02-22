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
		<div></div>
	)
}

export default ScrollToTop
