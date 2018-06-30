import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Data, DataChild} from './Data.js';
// import { Application } from "./Components/app.js";
import { solutions } from './data/data.js';
import LandingPage from './Components/LandingPage.js';
import { Route, Switch } from 'react-router-dom';
import Solution from './Components/Solution.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: solutions[0],
    }
  }
  render() {
    let filter="Bookstore";
    return (
      
      <Switch>
        
        {/* {solutions.categories.filter(x => x.title === filter).map((bucket) => {
          
        })}
        {solutions.content.filter(x=>x.categories.includes(filter)).map((bucket) => {
          return <Route path=`/${}`
        })} */}

        {/* <Route 
          exact path='/solution' 
          render={(props) => <Solution {...props} />} */}
        
        <Route path='/solution' component={Solution} />
          
          
        />
        <Route path='/' component={LandingPage} />
      </Switch>
      
      // <Solution />
    );
  }
}

export default App;
