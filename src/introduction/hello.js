import React, { Component } from 'react';
import '../App.css';

class Hello extends Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>Hello, world!</h1>
					<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
				</div>
			</div>

		);
	}
}

export default Hello;
