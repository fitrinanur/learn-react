import React, { Component } from 'react';
import '../App.css';

class Timer extends Component { 

	getInitialState() {
		return {secElapsed: 0};
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState({secElapsed: this.state.secElapsed + 1});
	}

	render() {
		return (
			<div>Detik terlewati: {this.state.secElapsed}</div>
		);
	}
};
export default Timer;