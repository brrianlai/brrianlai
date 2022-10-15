import React from 'react'
import Image from 'next/future/image'
import Tag from './Tag'

const Card = ({ image, height, width, title, tags, sizes }) => {
	return (
		<div className='card'>
			{image ? <Image src={image} height={height} width={width} alt={title} sizes={sizes} /> : null}
			<div className='card-content'>
				<h5>{title}</h5>
				{tags ?
					<div className='row' data-gap='smaller'>
						{tags.map((tag, index) => (
							<Tag content={tag} key={index} />
						))}
					</div>
				: null}
			</div>
		</div>
	)
}

export default Card