import React from 'react';
import Social from './Social';



class Header extends React.Component {

	constructor() {
		super();
		this.state = {
			active: false
		};
	}

	render() {
		return (
			<div>
				<header className="wrap">
					<h3 className="name">brrian</h3>
					<Social />
					<a href="#" className="icon icon-menu" onClick={ () => this.setState({active: !this.state.active}) }><i className="ri-menu-line"></i></a>
				</header>

				<nav className={'wrap ' + (this.state.active && 'active')}>
					<Social />
				</nav>
			</div>

		);
	}
}

export default Header