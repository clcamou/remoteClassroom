import Lesson_Content from "../../database/models/Lesson_Content";


export default async (req,res) => {
    let content_id = req.body.content_id
    let lesson_id = req.body.lesson_id
    Lesson_Content.destroy({
        where: {
            lesson_id: lesson_id,
            content_id: content_id
        }
    }).then(()=>{
        res.end()
    })
    
}