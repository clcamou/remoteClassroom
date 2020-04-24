import  User from "../../database/models/user";

export default async (req,res) => {
    //let user = req.body.username
    let user = "crab"
    let data = await User.find({
        where: {
            username: user
        }
    })
    console.log(data)
    res.json(data)
}