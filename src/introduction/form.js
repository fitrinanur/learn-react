import React, { Component } from 'react';
import FormContainer from './formContainer';
import '../App.css';

class Form extends Component {
	render(){
		return (
			<div className="container">
				<div className="columns">
					<div className="col-md-9 centered">
						<h3>React JS controlled Form Component</h3>
						<FormContainer />
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
