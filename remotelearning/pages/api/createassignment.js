import  Assignments from "../../database/models/Assignments";


export default async (req,res) => {
    let class_id = req.body.class_id
    let name = req.body.assignment_name
    Assignments.create({
        assignment_name: name,
        class_id: class_id
    }).then(res.end())
}