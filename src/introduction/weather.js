import React, { Component } from 'react';
import '../App.css';
import WeatherForm from '../component/weatherform'
import openWeatherMap from '../api/OpenWeatherMap';
class Weather extends Component { 
   
      handleSearch = function (location) {
        var that = this;
    
        openWeatherMap.getTemp(location).then(function (temp) {
          that.setState({
            location: location,
            temp: temp
          });
        }, function (errorMessage) {
            alert(errorMessage);
        });
      }
    render(){
        return(
            <WeatherForm onSearch={this.handleSearch.bind()}/>
        )
    }

	
};
export default Weather;