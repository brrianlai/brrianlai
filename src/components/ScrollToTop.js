import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

class ScrollToTop extends React.Component {
	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	render() {
		return (
			<a href="#" className="icon" onClick={this.scrollToTop}><i className="ri-arrow-up-line"></i></a>
		);
	}
}

export default ScrollToTop