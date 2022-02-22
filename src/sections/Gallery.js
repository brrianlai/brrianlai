import React from 'react'

function importAll(r) {
	return r.keys().map(r)
}

const photos = importAll(
	require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/)
)

const Gallery = () => {
	return (
		<section className='gallery'>
			{photos.map(photo => (
				<img src={photo} alt='' loading='lazy'></img>
			))}
		</section>
	)
}

export default Gallery
