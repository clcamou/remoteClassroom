//import Sequelize library 
const Sequelize = require('sequelize');
let path = require("path");
let appRoot = require("app-root-path")
//connect to database
const db = require(path.join(appRoot, 'database/db'));

//define the model with field of database
module.exports = db.sequelize.define(
  'lesson_content',
  {
    content_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content_type: {
      type: Sequelize.STRING
    },
    content_title: {
      type: Sequelize.STRING
    },
    lesson_id: {
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    classMethods:{
      //grabs every piece of content tied to the given lesson ID
      getContentForLesson: function(id){
        this.findAll({
          where: {
            lesson_id: id
          }
        }).then(function(result){
          return result
        })
      },
      // edit content
      updateLessonContent: function(content_id, newContent){
        this.update({content: newContent}, {
          where: {
            content_id: content_id
          }
        }).then(console.log(`updated lesson content with id ${content_id}`))
      },
      //remove a piece of content
      removeContent: function(id){
        this.destroy({where:{content_id: id}}).then(
          console.log(`deleted lesson content with id ${id}`)
          )
      }
    }
  }
);