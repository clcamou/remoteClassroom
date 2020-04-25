import React, { useState } from 'react';

class Quiz extends React.Component{
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
                            <input type = "radio" name = {question_number} value = {answer_1} id = {answer_1} required></input>
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_2}</h6>
                            <input type = "radio" name = {question_number} value = {answer_2} id = {answer_2} required></input>    
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_3}</h6>
                            <input type = "radio" name = {question_number} value = {answer_3} id = {answer_3} required></input>
                        </div>
                        <div className = "multiple-choice-answers">
                            <h6>{answer_4}</h6>
                            <input type = "radio" name = {question_number} value = {answer_4} id = {answer_4} required></input>
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

      render(){
        return (
          <div className = "assignment-container">
              <h4 className = "assignment_header">{this.props.assignment_name}</h4>
              
              <form action = {"/api/submitassignment/?assignment=" + this.props.assignment_id + "&user=" + this.props.nickname} method = "POST">
                {this.generateAssignments(this.props.data)}
                <div className = "submit-div">
                  <h4>Submit Answers</h4>
                  <input type = "submit"></input>
                </div>
              </form>
          </div>
        )
      }
    }
      export default Quiz