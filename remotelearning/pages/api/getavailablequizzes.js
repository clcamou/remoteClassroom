import { Student_Assignments } from "../../database/models/Student_Assignments";

export default async (req,res) => {
    let user = req.body.user_id
    let data = await Student_Assignments.findAll({
        where: {
            user_id: user,
            is_complete: false
        }
    })
    res.json(data)
}