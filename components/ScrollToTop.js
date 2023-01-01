import { useEffect } from 'react'
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
		<div className='scrolltotop' onClick={toTop}>
			<Icon name='ri-arrow-up-line' />
		</div>
	)
}

export default ScrollToTop
