import React from 'react';
import { withRouter } from 'react-router-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> testing </div>
    )
  }
}

export default withRouter(Test);