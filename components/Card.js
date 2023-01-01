import { Fragment } from 'react'
import Image from 'next/image'
import Tag from './Tag'
import Icon from './Icon'

const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children

const Card = ({ image, height, width, title, tags, sizes, link }) => {
	return (
		<div className='card'>
			<ConditionalWrapper
				condition={link}
				wrapper={children => <a href={link} alt={title} target='_blank'>{children}</a>}
			>
				<Fragment>
					<Image
						src={image}
						height={height}
						width={width}
						alt={title}
						sizes={sizes}
						quality='90'
					/>
					<div className='card-content'>
						<h5>{title}</h5>
						{tags &&
							<div className='row' data-gap='smaller'>
								{tags.map((tag, index) => (
									<Tag key={index}>{tag}</Tag>
								))}
								{link &&
									<div className='card-link'>
										<Icon name='ri-link' />
									</div>
								}
							</div>
						}
					</div>
				</Fragment>
			</ConditionalWrapper>
		</div>
	)
}

export default Card