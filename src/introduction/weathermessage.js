import React, { Component } from 'react';
import '../App.css';
import WeatherForm from '../component/weatherform'
import openWeatherMap from '../api/OpenWeatherMap';
class Weather extends Component { 
    var {temp, location} = this.props;
    render(){
        return (
          <h3>It's it {temp} in {location}.</h3>
        )
      }
	
};
export default Weather;



















