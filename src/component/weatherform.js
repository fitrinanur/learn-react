import React, {Component} from 'react';
class WeatherForm extends Component{
    onFormSubmit= function (e) {
        e.preventDefault();
    
        var location = this.refs.location.value;
    
        if (location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
        }
      }
    render(){
        return(
            <div>
                <form>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }

}




export default WeatherForm;