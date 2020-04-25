import React, { useState } from 'react';

class Lessons_Hub extends React.Component{
  constructor(props){
      super(props);
      }

      generateLessons(data){
        if (data.length > 0){
          data.map((rows) =>{
            const id = rows.lesson_id
            const lesson_name = rows.lesson_name;
            //const lesson_content = rows.lesson_content;
            //const content_type = rows.content_type;

            return(
              <tr key = {id}>
                <td>{lesson_name}</td>
              <td><a href = {window.location.hostname +"/lessons/?id=" + {id}}><button>Go to Lesson</button></a></td>
              </tr>
            )
          })
        }else{
          return(
            <h6>No Lessons Posted Yet!</h6>
          )
        }
      }

      render(){
        return (
          <div className = "lessons-container">
            <table id = "lessons-table">
            {this.generateLessons(this.props.data)}
            </table>
          </div>
        )
      }
    }
      export default Lessons_Hub