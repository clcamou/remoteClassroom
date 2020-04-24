import React, { useState } from 'react';

class Dashboard extends React.Component{
  constructor(props){
      super(props);
      }
      componentDidMount(){
          // fetch user info using username, then save as cookie
        let username = this.props.username
        fetch()
      }
      render(){
        return (
          <div className = "dashboard-container">
              <div className = "firstRow">
                    <div className = "itemCard">
                        <h4><a href = "/lessons">Lessons</a></h4>
                    </div>

                    <div className = "itemCard">
                        <h4><a href = "/grades">Grades</a></h4>
                    </div>
              </div>

              <div className = "secondRow">
                    <div className = "itemCard">
                        <h4><a href = "/quizzes">Quizzes</a></h4>
                    </div>

                    <div className = "itemCard">
                        <h4><a href = ""></a></h4>
                    </div>

              </div>
          </div>
        )
      }
    }
      export default Dashboard