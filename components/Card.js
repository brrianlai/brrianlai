import React from 'react'
import Image from 'next/future/image'
import Tag from './Tag'
import Icon from './Icon'

const Card = ({ image, height, width, title, tags, sizes, link }) => {
	return (
		<div className='card'>
			{(image && link) ?
				<a href={link} alt={title}>
					<Image
							src={image}
							height={height}
							width={width}
							alt={title}
							sizes={sizes}
							quality='90'
						/>
				</a>
			: image ?
				<Image
					src={image}
					height={height}
					width={width}
					alt={title}
					sizes={sizes}
					quality='90'
				/>
			: null}
			<div className='card-content'>
				<h5>{title}</h5>
				{tags ?
					<div className='row' data-gap='smaller'>
						{tags.map((tag, index) => (
							<Tag key={index}>{tag}</Tag>
						))}
						{link ?
							<a href={link} className='card-link' alt={title}>
								<Icon name='ri-link' />
							</a>
						: null}
					</div>
				: null}
			</div>
		</div>
	)
}

export default Card