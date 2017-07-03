import React, { Component } from 'react';

const Singleinput = (props) => (
		<div className="form-group">
			<label className="form-label">{props.title}</label>
			<input
				className = "form-input"
				type = {props.inputType}
				name = {props.name}
				value = {props.content}
				onChange = {props.controlFunc}
				placeholder= {props.placeholder}
			/>
		</div>
);

	Singleinput.propTypes = {
		inputType: React.PropTypes.oneOf(['text','number']).isRequired,
		title : React.PropTypes.string.isRequired,
		name : React.PropTypes.string.isRequired,
		content :React.PropTypes.oneOfType(
			[
				React.PropTypes.string,
				React.PropTypes.number,
			]
		),
		controlFunc : React.PropTypes.func.isRequired,
		placeholder : React.PropTypes.string,
	};

export default Singleinput;
