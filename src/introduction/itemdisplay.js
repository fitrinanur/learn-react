import React, { Component } from 'react';
import '../App.css';

class Itemdisplay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	const item = this.props.data;
	return (
		<div className="dashedBox">
			<strong>{item.name}</strong>
			<br/>
			&#9742;{item.phone}
			<p>
				{item.company.name}<br/><small>"{item.company.catchPhrase}"</small>
			</p>
			<p>
				Alamat: {item.address.suite}, {item.address.street}, {item.address.city}
			</p>
		</div>
	);
}
}


export default Itemdisplay;
