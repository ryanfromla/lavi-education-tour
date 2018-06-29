import React from 'react';
import Image from './image.js';
import { withRouter } from 'react-router-dom';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div onClick={() => this.props.history.push('/solution')}>
      {console.log('what is props', this.props.img)}
        <img src={this.props.img} />
      </div>
    );
  }
}

export default withRouter(MainImage);