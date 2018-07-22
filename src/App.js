import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { solutions } from './data/data.js';
import Solution from './Components/Solution.js';
import SolutionNavBarWrapper from './Components/SolutionNavBarWrapper.js';
import './styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: solutions[0],
      isDetailPage: false,
    }
    this.changeClassNameToShow = this.changeClassNameToShow.bind(this);
    this.changeClassNameToHide = this.changeClassNameToHide.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.goToLandingPage = this.goToLandingPage.bind(this);
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
    let isDetailPage = false;
    if (solutions[0].content[id] !== undefined) {
      isDetailPage = false;
    } else {
      isDetailPage = true;
    }
    this.setState({ currentSolution: solutions[0].content[id], isDetailPage }, () => console.log(this.state.currentSolution));
  }

  goToLandingPage() {

  }

  render() {
    let filter = "Bookstore";
    let isDetailPage = this.state.isDetailPage;

    return (
      <div className={isDetailPage ? 'detail-page' : 'landing-page'}>
        {!isDetailPage &&
          <div className="landing-page-header">
            <div className="show page-title">
              Bookstore
            </div>
            <div className="show page-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        }

        {isDetailPage &&
          <div className="breadcrumb">
            Tour Homepage > <a onClick={() => this.goToLandingPage() }>{filter}</a>
          </div>
        }

        <div className="nav-bar">
          <SolutionNavBarWrapper
            allSolutions={this.state.solutions}
            changeClassNameToShow={this.changeClassNameToShow}
            changeClassNameToHide={this.changeClassNameToHide}
            handleChangeOnClick={this.handleChangeOnClick}
            isDetailPage={this.state.isDetailPage}
          />
        </div>

        {!isDetailPage &&
          <div className="show landing-page-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        }

        {/* Mapping each content.url to a React-Router route */}
        <div className="show detail-page-content">
          <Switch>
            {this.state.solutions.content.filter(content => {
              return content.categories.includes(filter)
            }).map((content, index) => {
              return <Route
                        key={index}
                        exact path={`/${content.url}`}
                        render={(props) => <Solution {...props} currentSolution={content} />}
                      />
            })}

            {/* {this.state.solutions.categories.filter(category => {
              category.title == filter;
            }).map(category => {
              return <Route
                        exact path={`/${category.title}`}
                        render={(props) => <Solution {...props}  />}
                      />
            })} */}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path='/' component={App} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
