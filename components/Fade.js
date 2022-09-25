import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const Fade = ({ children }) => {
	return (
		<div>
			{children.map((child, index) => (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0}}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						key={{index}}
					>
						{child}
					</motion.div>
				</AnimatePresence>
			))}
		</div>
	)
}

export default Fade