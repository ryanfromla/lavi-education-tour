import React from 'react';
import {solutions} from '../data/data.js';
import Images from '../Components/Images.js';
import SolutionNavBar from './SolutionNavBar.js';
import MainImage from './MainImage.js';
import App from './app.js';
import './LandingPage.css';
import { withRouter } from 'react-router';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    // let allSolutions = solutions[0].content.splice(1, solutions[0].content.length-1);
    // console.log(allSolutions);
    this.state = {
      // allSolutionsExceptFirst: solutions[0].content.splice(1, solutions[0].content.length-1),
      allSolutions: solutions[0],
      bigSolution: 0,
      currSolutions: 7,
      isHovering: false,
    }
    // this.handleMouseEnter = this.handleMouseEnter.bind(this);
    // this.handleMouseExit = this.handleMouseExit.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
   }


  fetchMoreSolutions() {

  }

  // handleMouseEnter() {
  //   this.setState({ isHovering: !this.state.isHovering });
  // }

  // handleMouseExit() {
  //   this.setState({ isHovering: !this.state.isHovering });
  // }

  handleChangeOnClick() {
    // routes to the solution that was clicked

  }

  

  render() {
      // {console.log('this is', this.state.allSolutions.content.splice(0,1))}
      // {console.log('history is', this.props)}
    return (
      <div className="wrapper" >
        <div className="bookstore"> 
          Bookstore
        </div>
        <div className="subheading paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div className="carousel">
          <div className="wrapper">
            <div className="bigImage">
              
              <MainImage 
                // onClick={this.props.history.push('/content')}
                
                img={this.state.allSolutions.categories[0].thumbImage}
              />
            </div>
          
            <div className="smallImages"> 
              <SolutionNavBar 
                isHovering={this.state.isHovering}
                allSolutions={this.state.allSolutions}
                // handleMouseEnter={this.handleMouseEnter}
                // handleMouseExit={this.handleMouseExit}
                handleChangeOnClick={this.handleChangeOnClick}
              />
              {/* {this.state.allSolutions.content.map(solution => {
                return <Image 
                  source={solution.content.images[0].path}
                  key={solution.id}
                  handleMouseEnter={this.handleMouseEnter}
                  handleMouseExit={this.handleMouseExit}
                  handleChangeOnClick={this.handleChangeOnClick}
                  
                />
              })} */}
            </div>
          </div>

       
        </div>

      </div>
      


    );
  }
}

export default withRouter(LandingPage);