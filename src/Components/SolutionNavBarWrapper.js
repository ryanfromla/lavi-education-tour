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
    // You can destructure props like this.
    let { isDetailPage,
          allSolutions,
          changeClassNameToShow,
          changeClassNameToHide,
          handleChangeOnClick,
          toggleDivClassName
        } = this.props;

    // @TODO get length of solutions.
    let width = ((18/2 * 250) + 290);
    if (isDetailPage) {
      width = ((18 * 250) + 75);
    }

    return (
      <div className={`SolutionNavBarWrapper carousel ${isDetailPage ? 'single-row' : 'double-row'}`}>
        <div className="carousel-button button-left">l</div>
        <div className="wrapper">
          <div className="scroll-arrow">a</div>
          <div className="scroll"  style={{width:width+'px'}}>
            {!isDetailPage &&
                <div className="bigImage">
                  <MainImage
                    img={allSolutions.categories[0].thumbImage}
                    changeClassNameToShow={changeClassNameToShow}
                    handleChangeOnClick={handleChangeOnClick}
                  />
                </div>
            }
            <div className="smallImages">
              <SolutionNavBar
                allSolutions={allSolutions}
                changeClassNameToHide={changeClassNameToHide}
                handleChangeOnClick={handleChangeOnClick}
                toggleDivClassName={toggleDivClassName}
              />
            </div>
          </div>
        </div>
        <div className="carousel-button button-right">r</div>
      </div>
    );
  }
}

export default withRouter(SolutionNavBarWrapper);
