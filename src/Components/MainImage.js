import React from 'react';
import { withRouter } from 'react-router-dom';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMainImageClick() {
    this.props.changeClassNameToShow();
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <img 
          src={this.props.img} 
          onClick={() => this.handleMainImageClick()}
        />
      </div>
    );
  }
}

export default withRouter(MainImage);