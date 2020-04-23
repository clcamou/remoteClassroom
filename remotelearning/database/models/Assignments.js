//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
let Assignments = db.sequelize.define(
  'Assignments',
  {
    assignment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    assignment_name: {
      type: Sequelize.STRING
    },
    class_id: {
      type: Sequelize.INTEGER 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    classMethods:{
      getAssignmentsForClass: function(id){
        this.findAll({
          where: {
            class_id: id
          }
        }).then(function(res){
          return res
        })
      }
    }
  }
);

module.exports = Assignments