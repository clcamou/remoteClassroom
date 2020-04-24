import { userModel } from './models/user'
//import Sequelize library 
const Sequelize = require('sequelize');

const db = {};
//connect to mySQL 
const sequelize = new Sequelize('logindb','root', 'Greenapples_45', {
    host: "localhost", 
    dialect: "mysql",
    operatorsAliases: false,
    
    //setting connectings 
    pool: {
        max: 5, 
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
});

userModel.find({}).exec((err, user) =>
    users.forEach(u => console.log(u))
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; 