import  Lesson_Content  from "../../database/models/Lesson_Content";


export default async (req,res) => {
    let lesson_id = req.body.lesson_id
    let content_id = req.body.content_id
    let newContent = req.body.content
    Lesson_Content.findAll({
        where: {
            lesson_id: lesson_id,
            content_id: content_id
        }
    }).then((data) =>{
        return data.update({
            content: newContent
        })
    }).then(()=>{
        res.end()
    })
}