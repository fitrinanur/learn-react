import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Hello from './hello';
import Counter from './counter';
import Timer from './timer';
import Form from './form';
import './App.css';
class Header extends Component {
  render(){
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/hello'>Hello</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
            <li><Link to='/timer'>Timer</Link></li>
            <li><Link to='/form'>Form</Link></li>
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
