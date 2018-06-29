import React from 'react';
import { solutions } from '../data/data.js';
import MainImage from './MainImage.js';
import MainSolutionTitle from './MainSolutionTitle.js';
import Paragraph from './Paragraph.js';
import SolutionNavBar from './SolutionNavBar.js';
import { withRouter } from 'react-router';

class Solution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSolution: solutions[0].content[0],
      allSolutions: solutions[0],
      isHovering: false,
      hoverSolutionID: '',
    };
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleChangeOnClick(id) {
    this.setState({ currentSolution: this.state.allSolutions.content[id] });
  }
  
  handleMouseEnter(id) {
    this.setState({ isHovering: !this.state.isHovering });
    // this.setState({ hoverSolutionID: id });
  }
  
  handleMouseExit() {
    this.setState({ isHovering: !this.state.isHovering });
  }
  render() {

    let style = {
      overflowX: 'scroll',
      overflowY: 'hidden', 
      WebkitOverflowScrolling : 'touch'
     
    }
    return (

      <div className="container">
      {console.log('im in solution, my props are ', this.props)}
        <div className="row">
          <div className="col-md-12 text-center top-images" style={style}>
            <SolutionNavBar 
              allSolutions={this.state.allSolutions}
              isHovering={this.state.isHovering}
              handleMouseEnter={this.handleMouseEnter} 
              handleMouseExit={this.handleMouseExit}
              handleChangeOnClick={this.handleChangeOnClick}
            />
            {/* {this.state.allSolutions.content.map(solution => {
             return <Image  
              title={solution.title}
              description={solution.description}
              isHovering={this.state.isHovering}
              handleMouseEnter={this.handleMouseEnter}
              handleMouseExit={this.handleMouseExit}
              handleChangeOnClick={this.handleChangeOnClick} 
              id={solution.id} 
              source={solution.content.images[0].path} 
              key={solution.id} />
           })} */}
            
          </div>
          
        </div>
        <div>
            CURRENT SOLUTION IMAGE:
            <MainImage img={this.state.currentSolution.content.images[0].path} />

          </div>
          <div className="title" >
            CURRENT SOLUTION TITLE: 
            
            <MainSolutionTitle title={this.state.currentSolution.title} />
          </div>
          <div>
            CURRENT SOLUTION PARAGRAPH 1: 
            <Paragraph text={this.state.currentSolution.content.paragraphs[0]} />
          </div>
          <div>
           CURRENT SOLUTION PARAGRAPH 2:
            <Paragraph text={this.state.currentSolution.content.paragraphs[1]} />
          </div>
          
      </div> 
    );
  }  
}

export default withRouter(Solution);