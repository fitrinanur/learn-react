import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
	<div className="form-group">
		<select
			title={props.title}
			name= {props.name}
			value= {props.selectedOption}
			onChange= {props.controlFunc}
			className="form-control">
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
	title : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired,
	options : PropTypes.array.isRequired,
	selectedOption : PropTypes.string.isRequired,
	controlFunc : PropTypes.func.bind(),
	placeholder : PropTypes.string.isRequired,
};

export default Select;