import React, { useState } from 'react';

class Assignment_Hub extends React.Component{
  constructor(props){
      super(props);
      }

      generateAssignments(data){
        if (data.length > 0){
          data.map((rows) =>{
            const id = rows.assignment_id
            const assignment_name = rows.assignment_name;
            const is_complete = rows.is_complete;
            const grade = rows.grade;
            const feedback = rows.feedback;
            let completeRow; 
            let feedbackRow;
            let gradeRow;
            if (feedback){
              feedbackRow = <p>Feedback Available</p>
            } else{
              feedbackRow = <td>No Feedback Yet</td>
            }
            if (is_complete){
            completeRow = <td>Complete</td>
            }else{
              completeRow = <td>Incomplete</td>
            }
            if (grade){
            gradeRow = <td>{grade}</td>
            } else{
              gradeRow = <td>Ungraded</td>
            }

            return(
              <tr key = {id}>
                <td>{assignment_name}</td>
                {completeRow}
                {gradeRow}
                {feedbackRow}
              <td>
              <Link href = {{pathname: "/assignment", query: {assignment_id: id, assignment_name: assignment_name, grade: grade, feedback: feedback}}}>
                <a><button>Go to Assignment</button></a>
              </Link>;
                </td>
              </tr>
            )
          })
        }else{
          return(
            <h6>No Assignments Given Yet!</h6>
          )
        }
      }

      render(){
        return (
          <div className = "assignments-container">
            <table id = "assignments-table">
              <tr>
                <th>Assignment Name</th>
                <th>Completion Status</th>
                <th>Grade</th>
                <th>Feedback</th>
                <th>Go to Assignment</th>
              </tr>
            {this.generateAssignments(this.props.data)}
            </table>
          </div>
        )
      }
    }
      export default Assignment_Hub