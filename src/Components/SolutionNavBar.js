import React from 'react';

import Images from './Images.js';
import { withRouter } from 'react-router';

class SolutionNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    let style = {
      
    }
    return(
      <div className="solution-nav" style={style}>
        {this.props.allSolutions.content.map(solution => {
          return <Images  
            id={solution.id} 
            source={solution.content.images[0].path} 
            key={solution.id} 
            title={solution.title}
            description={solution.description}
            url={solution.url}
            handleMouseEnter={this.props.handleMouseEnter}
            handleMouseExit={this.props.handleMouseExit}
            handleChangeOnClick={this.props.handleChangeOnClick} 
          />
          })}
      </div>
    );
  }
}

export default withRouter(SolutionNavBar);