import { Student_Assignments } from "../../database/models/Student_Assignments";
import { Assignments } from  "../../database/models/Assignments"

export default async (req,res) => {
    let nickname = req.body.nickname
    let class_id = req.body.class_id
    //get all assignments for class
    Assignments.findAll({where:{class_id: {class_id}}}).then((data)=>{
        // get each individual row
        data.map((row) =>{
            Student_Assignments.create({
                assignment_id: row.assignment_id,
                nickname: nickname,
                is_complete: false
            })
        })
    }).then(() =>{
        res.end()
    })
}