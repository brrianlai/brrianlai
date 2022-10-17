import React from 'react'
import dynamic from 'next/dynamic'
const ScrollToTop = dynamic(() => import('../ScrollToTop'))

const Footer = () => {
	return (
		<footer>
			<h5>Brian Lai</h5>
			<ScrollToTop />
		</footer>
	)
}

export default Footer
