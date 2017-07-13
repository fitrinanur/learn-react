import React, { Component } from 'react';
import '../App.css';

class Timer extends Component { 

	constructor(props) {
		super(props);
		this.state = {
			secElapsed: 0
		}
	}

	componentDidMount() {
		this.interval = setInterval( () => {
			this.setState({secElapsed: this.state.secElapsed + 1});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="timer">
				<div><h3>Detik terlewati:</h3> <h1>{this.state.secElapsed}</h1></div>
			</div>
		);
	}
};
export default Timer;