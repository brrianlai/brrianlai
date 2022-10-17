import React from 'react'
import Header from './Header'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./Footer'))

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
