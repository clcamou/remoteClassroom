//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../db');

//define the model with field of database
module.exports = db.sequelize.define(
  'student_responses',
  {
    assignment_id: {
      type: Sequelize.INTEGER
    },
    nickname: {
      type: Sequelize.INTEGER
    },
    question_number: {
      type: Sequelize.INTEGER
    },
    question_response: {
      type: Sequelize.STRING
    },
    response_grade: {
      type: Sequelize.INTEGER, 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      getResponsesForAssignment: function(student, assignment_id){
        this.findAll({where: {nickname: student, assignment_id: assignment_id}})
      },
      gradeResponseForAssignment: function(student, assignment_id, question_number, response_grade){
        this.update({response_grade: response_grade}, {
          where: {
            nickname: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`graded question ${question_number} for assignment ${assignment_id}for user ${student}`))
      },
      addResponseToAssignment: function(student, assignment_id, question_number, question_response){
        this.create({assignment_id: assignment_id, nickname: student, question_number: question_number, question_response: question_response})
        .then(console.log(`recorded response to question ${question_number} for assignment ${assignment_id}for user ${student}`))
      },
      editResponse: function(question_response, nickname, assignment_id, question_number){
        this.update({question_response: question_response}, {
          where: {
            nickname: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`amended question ${question_number} response for assignment ${assignment_id}for user ${student}`))
      },
      removeResponseFromAssignment: function(student, assignment_id, question_number){
        this.destroy({
          where: {
            nickname: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`deleted question ${question_number} response for assignment ${assignment_id}for user ${student}`))
      }
    }
  }
);