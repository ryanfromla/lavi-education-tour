import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import LandingPage from './Components/LandingPage.js';
import Solution from './Components/Solution.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: solutions[0],
      landingIsActive: true,
      detailIsActive: false,
      filter: "Bookstore",
    };
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
    return (
      <div className={`App ${this.state.landingIsActive ? 'landing' : 'detail'}`}>
        <LandingPage
          solutions={this.state.solutions}
          allSolutions={this.state.solutions}
          changeClassNameToShow={this.changeClassNameToShow}
          changeClassNameToHide={this.changeClassNameToHide}
          handleChangeOnClick={this.handleChangeOnClick}
        />

      {/* Mapping each content.url to a React-Router route */}
      <Switch>
        {this.state.solutions.content.filter(content => {
          return content.categories.includes(this.state.filter)
        }).map((content, index) => {
          return <Route
                    key={index}
                    exact path={`/${content.url}`}
                    render={(props) => <Solution {...props} currentSolution={content} />}
                  />
        })}
      </Switch>
      </div>
    );
  }
}

export default App;

// {/* {this.state.solutions.categories.filter(category => {
//   category.title == this.state.filter;
// }).map(category => {
//   return <Route
//             exact path={`/${category.title}`}
//             render={(props) => <Solution {...props}  />}
//           />
// })} */}
// {/* <Route exact path="/" component={Home} /> */}
// {/* <Route path='/' component={App} /> */}
