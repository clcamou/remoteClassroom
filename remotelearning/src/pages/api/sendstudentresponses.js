import  Student_Responses  from "../../database/models/Student_Responses";


export default async (req,res) => {
    //function to parse form data
    let objectArray = [];
    

    Student_Responses.bulkCreate()
}