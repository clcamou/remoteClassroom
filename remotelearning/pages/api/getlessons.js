import { Lessons } from "../../database/models/Lessons";


export default async (req,res) => {
    let class_id = req.body.class_id
    let data = await Lessons.findAll({
        where: {
            class_id: class_id
        }
    })
    res.json(data)
}