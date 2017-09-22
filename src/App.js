import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Hello from './introduction/hello';
import Counter from './introduction/counter';
import Timer from './introduction/timer';
import Form from './introduction/form';
import Olahdata from './introduction/olahdata';
import Weather from './introduction/weather';
import './App.css';

class Header extends Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-default">
          <ul className="navbar">
              <li><Link to='/hello'>Hello</Link></li>
              <li><Link to='/counter'>Counter</Link></li>
              <li><Link to='/timer'>Timer</Link></li>
              <li><Link to='/form'>Form</Link></li>
            <li><Link to='/olahdata'>Olah data</Link></li>
            <li><Link to='/weather'>Weather</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
class Main extends Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/hello' component={Hello}/>
          <Route path='/counter' component={Counter}/>
          <Route path='/timer' component={Timer}/>
          <Route path='/form' component={Form}/>
          <Route path='/olahdata' component={Olahdata}/>
          <Route path='/weather' component={Weather}/>
        </Switch>
      </main>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
