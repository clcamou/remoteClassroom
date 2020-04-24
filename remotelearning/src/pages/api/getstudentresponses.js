import { Student_Responses } from "../../database/models/Student_Responses";


export default async (req,res) => {
    let user = req.body.user_id
    let assignment = req.body.assignment
    let data = await Student_Responses.findAll({
        where: {
            user_id: user,
            assignment_id: assignment
        }
    })
    res.json(data)
}