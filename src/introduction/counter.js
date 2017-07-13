import React, { Component } from 'react';
import '../App.css';

class Counter extends Component{

	constructor(props){
		super(props);
		this.state = {
			count :0
		}
	}

	incrementCount= function(e){
		this.setState ({
			count : this.state.count + 1
		})
	}

	decrementCount= function (e){
		this.setState ({
			count : this.state.count - 1
		})
	}

	render(){
	return(
		<div className="counter">
		<h1>{this.state.count}</h1>
		<button onClick={this.incrementCount.bind(this)} className="btn btn-inverse counter">Increment</button>
		<button onClick={this.decrementCount.bind(this)} className="btn btn-inverse counter" >Decrement</button>
		</div>
	)
	}
}
;

export default Counter;
