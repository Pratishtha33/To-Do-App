const { text } = require("express")
const ToDoModel= require("../Models/ToDoModel")
module.exports.getToDo= async (req,res) =>{
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}
module.exports.saveToDo=  async (req,res) =>{
    const {text} = req.body
   console.log(" text added" ,text) ;
    ToDoModel

    .create({text})
    .then((data)=>  
    {
        console.log("Added Sucessfully...");
        console.log(data);
        res.send(data);
     } )
   
}
module.exports.updateToDo = async(req, res) => {
    const { _id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Update Successfully..."))
.catch((err) => console.log(err))
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    //console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}