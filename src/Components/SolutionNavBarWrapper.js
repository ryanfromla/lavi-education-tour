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
    let width = ((18/2 * 150) + 300);

    return (
      <div className="SolutionNavBarWrapper carousel " style={{width:width+'px'}}>
        <div className="carousel-button button-right">l</div>
        <div className="wrapper">
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
        <div className="carousel-button button-right">r</div>
      </div>
    );
  }
}

export default withRouter(SolutionNavBarWrapper);
