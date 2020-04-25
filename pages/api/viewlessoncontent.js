  
import  Lesson_Content  from "../../database/models/Lesson_Content";


export default async (req,res) => {
    let lesson_id = req.body.lesson_id
    let data = await Lesson_Content.findAll({
        where: {
            lesson_id: lesson_id
        }
    })
    res.json(data)
}