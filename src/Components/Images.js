import React from 'react';
import IndividualSolutionTitle from './IndividualSolutionTitle.js';
import { withRouter } from 'react-router-dom';

class Images extends React.Component {
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
    
    let style = { 
      width: '150px',
      margin: '1px 0 0 1px',
      float: 'left'
      
    };

    let titleStyle = {
      display: 'inline'
    }
    return (
      <div style={style}>
        <img
          id={this.props.title}
          className='content-image'
          onClick={() => this.handleChangeOnClickOnImage()} 
          src={this.props.source} style={style} 
          alt="" 
          />
          
          {/* THIS span tag contains each image's description */}
          <span> {this.props.description} </span>

        <div style={titleStyle}>
          <IndividualSolutionTitle  title={this.props.title} />
        </div>
      </div>
    );
  }
}

export default withRouter(Images);