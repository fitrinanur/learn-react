import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import Itemdisplay from "./itemdisplay";

class Olahdata extends Component {
	constructor(props){
		super(props);
		return {data : []};
	}
	render(){
		let items = this.state.data.map(function(item, index) {
			return (
				<Itemdisplay key={index} data={item}/>
			);
		});
		return (
			<div>
				{items.length > 0 ? '' : 'memuat...'}
				{items}
			</div>
		);
	}
	componentDidMount(){
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		});
	}

}

export default Olahdata;
