import React from 'react'
import Image from 'next/image'

const Gallery = ({ children }) => {
	return (
		<section className='gallery'>
			{children}
		</section>
	)
}

export default Gallery
