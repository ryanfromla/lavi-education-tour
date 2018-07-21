import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import Solution from './Components/Solution.js';
import SolutionNavBarWrapper from './Components/SolutionNavBarWrapper.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: solutions[0],
    }
    this.changeClassNameToShow = this.changeClassNameToShow.bind(this);
    this.changeClassNameToHide = this.changeClassNameToHide.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
  }

  changeClassNameToShow() {
    let classesToToggle = document.getElementsByClassName('hide');
    while (classesToToggle.length) {
      classesToToggle[0].className = 'show';
    }
  }

  changeClassNameToHide() {
    let classesToToggle = document.getElementsByClassName('show');
    while (classesToToggle.length) {
      classesToToggle[0].className = 'hide';
    }
  }

  handleChangeOnClick(id) {
    this.setState({ currentSolution: solutions[0].content[id] });
  }

  render() {
    let filter = "Bookstore";

    return (
      <div>
        <div className="show">
          Bookstore
        </div>

        <div className="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <SolutionNavBarWrapper
          allSolutions={this.state.solutions}
          changeClassNameToShow={this.changeClassNameToShow}
          changeClassNameToHide={this.changeClassNameToHide}
          handleChangeOnClick={this.handleChangeOnClick}
        />

        <div className="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

      {/* Mapping each content.url to a React-Router route */}
      <Switch>
        {this.state.solutions.content.filter(content => {
          return content.categories.includes(filter)
        }).map((content, index) => {
          return <Route
                    key={index}
                    exact path={`/solutions/${content.url}`}
                    render={(props) => <Solution {...props} currentSolution={content} />}
                  />
        })}

        {/* {this.state.solutions.categories.filter(category => {
          category.title == filter;
        }).map(category => {
          return <Route
                    exact path={`/solutions/${category.title}`}
                    render={(props) => <Solution {...props}  />}
                  />
        })} */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path='/' component={App} /> */}
      </Switch>

      </div>

    );
  }
}

export default App;
