import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const ScrollToTop = () => {
	return (
		<a href="#" className="icon" onClick={toTop}><i className="ri-arrow-up-line"></i></a>
	);
}

export default ScrollToTop