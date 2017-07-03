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
			<div>Detik terlewati: {this.state.secElapsed}</div>
		);
	}
};
export default Timer;