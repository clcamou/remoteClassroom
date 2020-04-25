import React, { useState } from 'react';
import UseRouter, { useRouter } from 'next/router'
class Assignment_Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let router = useRouter()
    let assignment_name = router.assignment_name
    let grade = router.grade
    let feedback = router.feedback
    return (
      <div className="assignment-container">
        <div className="row">
          <div className="col">
            <h4 className="assignment_header">{assignment_name}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className="grade">Grade: {grade}</h6>
          </div>
          <div className="col">
            <h6>Feedback</h6>
            <p className="feedback">{feedback}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Assignment_Overview