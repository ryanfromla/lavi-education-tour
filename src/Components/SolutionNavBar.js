import React from 'react';

import Images from './Images.js';
import { withRouter } from 'react-router';

class SolutionNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {

    }
    return(
      <div className="solution-nav" style={style}>
        {this.props.allSolutions.content.map(solution => {
          return <Images
            id={solution.id}
            source={solution.thumbImage}
            key={solution.id}
            title={solution.title}
            description={solution.description}
            url={solution.url}
            handleChangeOnClick={this.props.handleChangeOnClick}
            changeClassNameToHide={this.props.changeClassNameToHide}
          />
          })}
      </div>
    );
  }
}

export default SolutionNavBar;
