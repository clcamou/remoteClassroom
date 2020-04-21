
import React, { useState } from 'react';

class Assignment_Hub extends React.Component{
  constructor(props){
      super(props);
      }

      generateQuestions(data){
        if (data.length > 0){
          data.map((rows) =>{
            const question_number = rows.question_number
            const prompt = rows.prompt
            const question_type = rows.question_type;

                if(question_type === "multiple"){
                    const answer_1 = rows.answer_1
                    const answer_2 = rows.answer_2
                    const answer_3 = rows.answer_3
                    const answer_4 = rows.answer_4
                    return(
                    <div>
                        <h6 className = "question-header"> Question {question_number}</h6>
                        <h5 className = "prompt">{prompt}</h5>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_1}</h6>
                            <input type = "radio" name = {question_number} id = {answer_1}></input>
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_2}</h6>
                            <input type = "radio" name = {question_number} id = {answer_2}></input>    
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_3}</h6>
                            <input type = "radio" name = {question_number} id = {answer_3}></input>
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_4}</h6>
                            <input type = "radio" name = {question_number} id = {answer_4}></input>
                        </div>
                    </div>
                    )
                }else{
                    return(
                    <div>
                        <h6 className = "question-header"> Question {question_number}</h6>
                        <h5 className = "prompt">{prompt}</h5>
                        <input type = "text" name = {question_number}></input>
                    </div>
                    )
                }
            })
        }
    }

      sendAnswers(){

      }

      render(){
        return (
          <div className = "assignment-container">
              <h4 className = "assignment_header">{this.props.assignment_name}</h4>
              <h6 className = "grade">Grade: {this.props.grade}</h6>
              <h6>Feedback</h6>
              <p className = "feedback">{this.props.feedback}</p>
              <form action = {"/submit/" + this.props.assignment_id} method = "POST">
                {this.generateAssignments(this.props.data)}
              </form>
          </div>
        )
      }
    }
      export default Assignment_Hub
