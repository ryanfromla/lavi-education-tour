import React from 'react';

import IndividualContentWrapper from './IndividualContentWrapper.js';

class Solution extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = {
      overflowX: 'scroll',
      overflowY: 'hidden',
      WebkitOverflowScrolling : 'touch'
    }

    return (
      <div className="container">
        <IndividualContentWrapper
          currentSolution={this.props.currentSolution}
        />
      </div>
    );
  }
}

export default Solution;
