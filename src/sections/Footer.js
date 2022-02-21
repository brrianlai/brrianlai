import React from 'react';
import Social from '../components/Social';
import ScrollToTop from '../components/ScrollToTop'

class Footer extends React.Component {
	render() {
		return (
			<footer className="wrap">
				<h5 className="name">brrian</h5>
				<Social />
				<ScrollToTop />
			</footer>
		);
	}
}

export default Footer