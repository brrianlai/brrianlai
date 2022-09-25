import React from 'react'

const Gallery = ({ children }) => {
	return (
		<section className='gallery'>
				{children.map((child, index) => (
					<div className='gallery-photo' key={index}>
						{child}
					</div>
				))}
		</section>
	)
}

export default Gallery
