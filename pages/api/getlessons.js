import Sequelize from "sequelize";
import Questions from "../../database/models/Assignment_Questions"
//grab assignments 
//assumes you have access to assignment ID


export default async (req, res) => {
   let id = req.params.id
    const data = await Questions.findAll(
        {where: {assignment_id:id}}
    )
    res.JSON(data)
}