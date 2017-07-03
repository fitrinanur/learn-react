import React, { Component } from 'react';

const Select = (props) => (
	<div className="form-group">
		<select
			name= {props.name}
			value= {props.selectedOption}
			onChange= {props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
	</div>
);

Select.PropTypes = {
	name : React.PropTypes.string.isRequired,
	options : React.PropTypes.array.isRequired,
	selectedOption : React.PropTypes.string.isRequired,
	controlFunc : React.PropTypes.func.bind(),
	placeholder : React.PropTypes.string.isRequired,
};

export default Select;