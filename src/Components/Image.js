import React from 'react';
import IndividualSolutionTitle from './IndividualSolutionTitle.js';
import { withRouter } from 'react-router-dom';
import './../styles/css/Image.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOnClickOnImage = this.handleChangeOnClickOnImage.bind(this);
  }

  handleChangeOnClickOnImage() {
    this.props.handleChangeOnClick(this.props.id);
    this.props.history.push(`/${this.props.url}`);
    this.props.changeClassNameToHide();

    let x = document.getElementsByClassName('content-image')
    console.log(x)
    // while (x && x.length) {
    //   x[0].className += 'inactive';
    // }

    // document.getElementById(this.props.title).classList.remove('inactive')
    // document.getElementById(this.props.title).classList.add('active');
  }

  render() {
    return (
      <div className="Images">
        <img
          id={this.props.title}
          className='content-image'
          onClick={() => this.handleChangeOnClickOnImage()}
          src={this.props.source}
          alt=""
        />

          {/* THIS span tag contains each image's description */}
        <div className="image-description"> {this.props.description} </div>

        <div className="image-title-overlay">
          <IndividualSolutionTitle  title={this.props.title} />
        </div>
      </div>
    );
  }
}

export default withRouter(Image);
