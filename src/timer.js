import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

let Timer = React.createClass({
	getInitialState: function() {
		return {secElapsed: 0};
	},
	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	tick: function() {
		this.setState({secElapsed: this.state.secElapsed + 1});
	},

	render: function() {
		return (
			<div>Detik terlewati: {this.state.secElapsed}</div>
		);
	}
});
export default Timer;