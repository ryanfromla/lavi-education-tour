import React from 'react';
import { withRouter } from 'react-router';
import SolutionNavBarWrapper from './SolutionNavBarWrapper.js';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="LandingPage">
      <div className="show page-title">
        Bookstore
      </div>

      <div className="show page-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <SolutionNavBarWrapper
        allSolutions={this.props.solutions}
        changeClassNameToShow={this.props.changeClassNameToShow}
        changeClassNameToHide={this.props.changeClassNameToHide}
        handleChangeOnClick={this.props.handleChangeOnClick}
      />

      <div className="show landing-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>);
  }
}

export default withRouter(LandingPage);
