import React from 'react';
import { withRouter } from 'react-router';
import MainSolutionTitle from './MainSolutionTitle';
import Paragraph from './Paragraph';
import './../styles/css/IndividualContentWrapper.css';


class IndividualContentWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='IndividualContentWrapper'>
        <div>
          CURRENT SOLUTION IMAGE:
          <img src={this.props.currentSolution.homeImage} />
        </div>
        <div>
          CURRENT SOLUTION TITLE:
          <MainSolutionTitle title={this.props.currentSolution.title} />
        </div>

        {/* Map paragraphs for single solution and return Paragraph components */}
        {this.props.currentSolution.content.paragraphs.map((paragraph, index) => {
          return <div key={index} className='paragraph'>
                    Paragraph Number: {index}
                    <Paragraph text={paragraph} />
                  </div>
        })}

        {/* Map paragraphs for single solution and return <imgs> wrapped in <divs> */}
        {this.props.currentSolution.content.images.map((image, index) => {
          return <div key={index} className='content-images'>
                    Image Number : {index}
                    <img src={image.path} />
                  </div>
        })}
      </div>
    );
  }

}

export default withRouter(IndividualContentWrapper);
