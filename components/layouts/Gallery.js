import React from 'react'
import Image from 'next/image'

const photos = [
	{
		source: '/IMG_0848.jpg',
		width: '1120',
		height: '2208'
	},
	{
		source: '/IMG_0882.jpeg',
		width: '4032',
		height: '3024'
	},
	{
		source: '/IMG_3994.jpeg',
		width: '4032',
		height: '3024'
	}/*,
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},
	{
		source: '/IMG_0848.jpg',
		width: '2208',
		height: '1120'
	},





	
	
	'/IMG_5778.jpeg',
	'/IMG_6077.jpeg',
	'/IMG_6432.jpg',
	'/IMG_6808.jpeg',
	'/IMG_20170628_194745.jpg',
	'/IMG_20170628_200243.jpg',
	'/IMG_20170709_220741_349.jpg'*/
]

const Gallery = () => {
	return (
		<section className='gallery'>
			<div className='gallery-photo'>
				{photos.map((photo, index) => (
					<Image src={photo.source} width={photo.width} height={photo.height} layout='responsive' key={index} />		
				))}
			</div>
		</section>
	)
}

export default Gallery
