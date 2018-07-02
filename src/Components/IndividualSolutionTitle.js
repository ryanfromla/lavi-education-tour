import React from 'react';
import { withRouter } from 'react-router';

class IndividualSolutionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = {
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      width: '100%',
    }
    return(
     <span style={style}>{this.props.title}</span>
    );
  }
}

export default withRouter(IndividualSolutionTitle);

