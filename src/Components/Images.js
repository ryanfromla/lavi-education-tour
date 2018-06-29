import React from 'react';
import IndividualSolutionTitle from './IndividualSolutionTitle.js';
import { withRouter } from 'react-router-dom';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let source = this.props.source; //store the image source into the a variable
    
    let style = { //style the image's width and margin
      width: '150px',
      margin: '1px 0 0 1px',
      float: 'left'
      
    };

    let titleStyle = {
      display: 'inline'
    }
    return (
  
      <div 
      // onClick={() => this.props.history.push('/solution')}
      style={style}>
      
        {console.log('this images props are ', this.props.history.push)}
        <img 
          className={`img${this.props.id}`}
          // onMouseEnter={() => this.handleMouseEnter()} 
          // onMouseOut={() => this.props.handleMouseExit()}
          // onClick={() => this.props.handleChangeOnClick(this.props.id)} 
          onClick={() => this.props.history.push('/solution')}
          src={source} style={style} 
          alt="" 
          />
  
          <span> {this.props.description} </span>
          {/* {this.state.isMouseInside ? (
            <span> {this.props.description} </span>
          ) : (
            null
          )} */}
        <div style={titleStyle}>
          <IndividualSolutionTitle  title={this.props.title} />
        </div>
      </div>
    );
  }
}

export default withRouter(Images);