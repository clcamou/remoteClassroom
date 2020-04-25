import React, { useState } from 'react';
import UseRouter, { useRouter } from 'next/router'
class Assignment_Overview extends React.Component{
  constructor(props){
      super(props);
      }

      render(){
      let router = useRouter()
      let assignment_name = router.assignment_name
      let grade = router.grade
      let feedback = router.feedback
        return (
          <div className = "assignment-container">
              <h4 className = "assignment_header">{assignment_name}</h4>
              <h6 className = "grade">Grade: {grade}</h6>
              <h6>Feedback</h6>
              <p className = "feedback">{feedback}</p>
          </div>
        )
      }
    }
      export default Assignment_Overview