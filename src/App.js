import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Data, DataChild} from './Data.js';
// import { Application } from "./Components/app.js";
import LandingPage from './Components/LandingPage.js';
import { Route, Switch } from 'react-router-dom';
import Solution from './Components/Solution.js';


class App extends Component {
  render() {
    return (
      
      <Switch>
        <Route path='/' component={LandingPage} />
          
        <Route 
          exact path='/solution' 
          // render={(props) => <Solution {...props} />}
          component={Solution}
          
        />
      </Switch>
      
      // <Solution />
    );
  }
}

export default App;
