import React from 'react';
import { withRouter } from 'react-router';

import MainImage from './MainImage';
import SolutionNavBar from './SolutionNavBar';
import './../styles/css/SolutionNavBarWrapper.css';

class SolutionNavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let width = (18/2 * 150 + 680);

    return (
      <div className="SolutionNavBarWrapper carousel ">
        <div className="wrapper" style={{width:width+'px'}}>
          <div className="bigImage">
            <MainImage
              img={this.props.allSolutions.categories[0].thumbImage}
              changeClassNameToShow={this.props.changeClassNameToShow}
              handleChangeOnClick={this.props.handleChangeOnClick}
            />
          </div>
          <div className="smallImages">
            <SolutionNavBar
              allSolutions={this.props.allSolutions}
              changeClassNameToHide={this.props.changeClassNameToHide}
              handleChangeOnClick={this.props.handleChangeOnClick}
              toggleDivClassName={this.props.toggleDivClassName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SolutionNavBarWrapper);
