
import React, { useState } from 'react';

class Assignment_Overview extends React.Component{
  constructor(props){
      super(props);

      }

      render(){
        return (
          <div className = "assignment-container">
              <h4 className = "assignment_header">{this.props.assignment_name}</h4>
              <h6 className = "grade">Grade: {this.props.grade}</h6>
              <h6>Feedback</h6>
              <p className = "feedback">{this.props.feedback}</p>
          </div>
        )
      }
    }
      export default Assignment_Overview
