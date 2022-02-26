import React from 'react'
import Image from 'next/image'

const photos = [
	'/IMG_0848.jpg',
	'/IMG_0882.jpeg',
	'/IMG_3994.jpeg',
	'/IMG_5778.jpeg',
	'/IMG_6077.jpeg',
	'/IMG_6432.jpg',
	'/IMG_6808.jpeg',
	'/IMG_20170628_194745.jpg',
	'/IMG_20170628_200243.jpg',
	'/IMG_20170709_220741_349.jpg'
]

const Gallery = () => {
	return (
		<section className='gallery'>
			{photos.map(photo => (
				<div class="gallery-photo">
					<Image src={photo} layout='fill' object-fit='contain'/>
				</div>
			))}
		</section>
	)
}

export default Gallery
