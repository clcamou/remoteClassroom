import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // fetch user info using username, then save as cookie

  }
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <h4><a href="/api/lessons">Lessons</a></h4>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <h4><a href="/grades">Grades</a></h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <h4><a href="/quizzes">Quizzes</a></h4>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <h4><a href="/profile">Profile</a></h4>
              </div>
              </div>
          </div>
          <style jsx>{`
       h4 {
         color: cadetblue;
         text-align: center;
         padding: 20px
       }
     `}</style>
        </div>
    )
  }
}
export default Dashboard