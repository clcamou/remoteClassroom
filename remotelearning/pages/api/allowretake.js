//import db from "../../database/db"
//import { sequelize } from "sequelize";
import Student_Assignments from "../../database/models/Student_Assignments";


export default async (req,res) => {
    let user_id = req.body.user_id
    let assignment_id = req.body.assignment_id
    Student_Assignments.findOne({
        where: {
            user_id: user_id,
            assignment_id: assignment_id
        }
    }).then((data) =>{
        return data.update({
            is_complete: false
        })
    }).then(() => {
        res.end()
    })


    
}