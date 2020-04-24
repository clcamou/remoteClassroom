import { Student_Assignments } from "../../database/models/Student_Assignments";

export default async (req,res) => {
    let user = req.body.user_id || "test"
    let assignment = req.body.assignment_id || "1"
    let data = await Student_Assignments.findOne({
        where: {
            user_id: user,
            assignment_id: assignment
        }
    })
    console.log(data)
    res.json(data)
}