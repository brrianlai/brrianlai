import React from 'react';

class Introduction extends React.Component {
	render () {
		return (
			<section className="introduction">
				<div className="column">
					<h1 className="heading">hi i live in vancouver</h1>
					<p>i'm learning react</p>
				</div>
				<div className="column">
					<div className="profile"></div>
				</div>
			</section>
		);
	}
}

export default Introduction