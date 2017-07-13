import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
		<div className="form-group">
			<label className="form-label">{props.title}</label>
			<input
				className = "form-control"
				type = {props.inputType}
				name = {props.name}
				value = {props.content}
				onChange = {props.controlFunc}
				placeholder= {props.placeholder}
			/>
		</div>
);

	SingleInput.propTypes = {
		inputType: PropTypes.oneOf(['text','number']).isRequired,
		title : PropTypes.string.isRequired,
		name : PropTypes.string.isRequired,
		content : PropTypes.oneOfType(
			[
				PropTypes.string,
				PropTypes.number,
			]
		).isRequired,
		controlFunc : PropTypes.func.isRequired,
		placeholder : PropTypes.string,
	};

export default SingleInput;
