import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

const variants = {
	hidden: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
}

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<motion.main
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{ type: 'linear' }}
			>
				{children}
			</motion.main>
			<Footer />
		</>
	)
}

export default Layout
