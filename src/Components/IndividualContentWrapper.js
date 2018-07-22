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
        <div className="solution-image">
          <img src={this.props.currentSolution.homeImage} />
        </div>
        <div className="solution-title">
          <MainSolutionTitle title={this.props.currentSolution.title} />
        </div>

        {/* Map paragraphs for single solution and return Paragraph components */}
        {this.props.currentSolution.content.paragraphs.map((paragraph, index) => {
          return <div key={index} className='paragraph'>
                    <Paragraph text={paragraph} />
                  </div>
        })}

        <div classname="content-images">
          {/* Map paragraphs for single solution and return <imgs> wrapped in <divs> */}
          {this.props.currentSolution.content.images.map((image, index) => {
            return <div key={index} className='content-image'>
                      <img src={image.path} />
                    </div>
          })}
        </div>
      </div>
    );
  }

}

export default withRouter(IndividualContentWrapper);
