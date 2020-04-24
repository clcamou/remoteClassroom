import  Assignments from "../../database/models/Assignments";


export default async (req,res) => {
    //let class_id = req.body.class_id
    //let name = req.body.assignment_name
    let class_id = req.body.class_id
    let name = req.body.name
    Assignments.create({
        assignment_name: name,
        class_id: class_id
    }).then(
    console.log("created"),
    res.end())
}