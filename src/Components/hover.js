import React from 'react';

export class HoverOver extends React.Component {
   constructor() {
     super();
     this.state = { text : '' }
   }
   //set the text
   onMouseover (e) {
     this.setState({text : 'some text'})
   }
   //clear the text
   onMouseout (e) {
     this.setState({text : ''})
   }
   render () {
      const {text} = this.state;
      return (
        <div 
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{text}</div>
      )
   }
}