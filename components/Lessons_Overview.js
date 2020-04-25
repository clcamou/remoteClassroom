import React, { useState } from 'react';

class Lessons_Overview extends React.Component{
  constructor(props){
      super(props);
      }
      //dynamic generation of lesson content based on content type
      generateLessonData(data){
        if (data.length > 0){
          data.map((rows) =>{
            const id = rows.content_id
            const lesson_content = rows.lesson_content;
            // content types text,image, and video (youtube at least) valid for now
            const content_type = rows.content_type;
            const content_title = rows.content_title;

            if(content_type === "video"){
                return (
                <>
                <h2>{content_title}</h2>
                <iframe width="560" height="315" src={lesson_content} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </>
                )
            } 

            else if (content_type === "image"){
                return (
                    <div className = "lesson-content">
                        <h2>{content_title}</h2>
                        <img src = {lesson_content} alt = "no description, see context or ask teacher"/>
                    </div>
                )
            }
            // for text content
            else{
                return (
                    <div className = "lesson-content">
                        <h2>{content_title}</h2>
                        <p>{lesson_content}</p>
                    </div>
                )
            }
          })
        }else{
          return(
            <h6>No Content for Lesson!</h6>
          )
        }
      }

      render(){
        return (
          <div className = "lessons-container">
              <h1 id = {this.props.id} className = "lesson-title">{this.props.title}</h1>
            {this.generateLessonData(this.props.data)}
          </div>
        )
      }
    }
      export default Lessons_Overview