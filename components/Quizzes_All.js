import React, { useState } from 'react';
import Link from "next/link"
import Router from "next/router"

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
            let completeRow; 
            if (is_complete){
            completeRow = <td>Complete</td>
            }else{
              completeRow = <td>Incomplete</td>
            }

            return(
              <tr key = {id}>
                <td>{assignment_name}</td>
                {completeRow}
              <td>
              <Link href = {{pathname: "/quiz", query: {assignment_id: id, assignment_name: assignment_name}}}>
                <a><button>Go to Quiz</button></a>
              </Link>  
              </td>
              </tr>
            )
          })
        }else{
          return(
            <h6>No Quizzes Available for this Class!</h6>
          )
        }
      }

      render(){
        return (
          <div className = "assignments-container">
            <table id = "assignments-table">
              <tr>
                <th>Quiz Name</th>
                <th>Completion Status</th>
                <th>Go to Quiz</th>
              </tr>
            {this.generateAssignments(this.props.data)}
            </table>
          </div>
        )
      }
    }
      export default Assignment_Hub