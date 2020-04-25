  
import  Assignments from "../database/models/Assignments";
import { Student_Assignments } from "../database/models/Student_Assignments";
import { User_Classes } from "../database/models/User_Classes";
export default async (req,res) => {
    //let class_id = req.body.class_id
    //let name = req.body.assignment_name
    let class_id = req.body.class_id
    let name = req.body.name
    let newAssignment = await Assignments.create({
        assignment_name: name,
        class_id: class_id
    })
    //get all students in class, then add assignment to all class members
    User_Classes.findAll({
        //get students in class
        where: {class_id = class_id}
    }).then(data => {
        data.map(rows =>{
            // add students to assignment
            Student_Assignments.create({
                assignment_id: newAssignment.assignment_id,
                nickname: rows.nickname,
                is_complete: false
            })
        })
    }).then(res.end())
}