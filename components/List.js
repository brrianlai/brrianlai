import React from 'react'
import Icon from './Icon'

export const ListItem = ({ name, iconLeft, iconRight, link }) => {
	return (
		<a href={link} alt={name}>
			<div className='list-item'>
				<div className='row list-row'>
					{iconLeft ? <Icon name={iconLeft} /> : null}
					{name ? <h5>{name}</h5> : null}
				</div>
				<div className='row list-row'>
					{iconRight ? <Icon name={iconRight} /> : null}
				</div>
			</div>
		</a>
	)
}

const List = ({ children }) => {
	return (
		<div className='list'>
			{children}
		</div>
	)
}

export default List