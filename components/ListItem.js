import React from 'react'
import Icon from './Icon'

const ListItem = ({ name, iconLeft, iconRight }) => {
	return (
		<div className='list-item'>
			<div className='row'>
				{iconLeft ? <Icon name={iconLeft} /> : null}
				{name ? <h5>{name}</h5> : null}
			</div>
			<div className='row'>
				{iconRight ? <Icon name={iconRight} /> : null}
			</div>
		</div>
	)
}

export default ListItem